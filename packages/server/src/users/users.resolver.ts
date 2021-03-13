import { Injectable, Req } from "@nestjs/common"
import { Args, Context, Field, Mutation, ObjectType, ResolveField, Resolver, Root } from "@nestjs/graphql"
import { RedisService } from "nestjs-redis"
import { User } from "../prisma/generated/typegraphql"
import { PrismaService } from "../prisma/prisma.service"
import argon2 from "argon2"

@ObjectType()
class FieldError {
  @Field()
  field: string
  @Field()
  message: string
}

@ObjectType()
class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[]

  @Field(() => User, { nullable: true })
  user?: User
}

@Injectable()
@Resolver("User")
export class UsersResolver {
  constructor(private prismaService: PrismaService, private redisService: RedisService) {}

  @ResolveField(() => String)
  email(@Root() user: User, @Req() req) {
    // this is the current user and its ok to show them their own email
    if (req.session.userId === user.id) {
      return user.email
    }
    // current user wants to see someone elses email
    return ""
  }

  @Mutation(() => UserResponse)
  async changePassword(
    @Args("token") token: string,
    @Args("newPassword") newPassword: string,
    @Req() request
  ): Promise<UserResponse> {
    if (newPassword.length <= 2) {
      return {
        errors: [
          {
            field: "newPassword",
            message: "length must be greater than 2"
          }
        ]
      }
    }

    const key = "forget-password:" + token
    const userId = await this.redisService.getClient("main").get(key)
    if (!userId) {
      return {
        errors: [
          {
            field: "token",
            message: "token expired"
          }
        ]
      }
    }

    const userIdNum = parseInt(userId)
    const user = await this.prismaService.user.findFirst({
      where: {
        id: userIdNum
      }
    })

    if (!user) {
      return {
        errors: [
          {
            field: "token",
            message: "user no longer exists"
          }
        ]
      }
    }

    await this.prismaService.user.update({
      where: {
        id: userIdNum
      },
      data: {
        password: await argon2.hash(newPassword)
      }
    })

    await this.redisService.getClient("user").del(key)

    // log in user after change password
    request.session.userId = user.id

    return { user }
  }

  @Mutation(() => UserResponse)
  async register(
    @Args("options") options: { email: string; username: string; password: string },
    @Req() req
  ): Promise<UserResponse> {
    if (!options.email.includes("@")) {
      return {
        errors: [
          {
            field: "email",
            message: "invalid email"
          }
        ]
      }
    }

    if (options.username.length <= 2) {
      return {
        errors: [
          {
            field: "username",
            message: "length must be greater than 2"
          }
        ]
      }
    }
    if (options.username.includes("@")) {
      return {
        errors: [
          {
            field: "username",
            message: "cannot include an @"
          }
        ]
      }
    }

    if (options.password.length <= 2) {
      return {
        errors: [
          {
            field: "password",
            message: "length must be greater than 2"
          }
        ]
      }
    }

    const hashedPassword = await argon2.hash(options.password)
    let user
    try {
      user = await this.prismaService.user.create({
        data: {
          name: options.username,
          email: options.email,
          password: hashedPassword
        }
      })
    } catch (err) {
      console.log(err)
      //|| err.detail.includes("already exists")) {
      // duplicate username error
      if (err.code === "23505") {
        return {
          errors: [
            {
              field: "username",
              message: "username already taken"
            }
          ]
        }
      }
    }

    // store user id session
    // this will set a cookie on the user
    // keep them logged in
    req.session.userId = user.id

    return { user }
  }

  @Mutation(() => UserResponse)
  async login(
    @Args("usernameOrEmail") usernameOrEmail: string,
    @Args("password") password: string,
    @Req() req
  ): Promise<UserResponse> {
    let user: User
    if (usernameOrEmail.includes("@")) {
      user = await this.prismaService.user.findFirst({ where: { email: usernameOrEmail } })
    } else {
      user = await this.prismaService.user.findFirst({ where: { name: usernameOrEmail } })
    }

    if (!user) {
      return {
        errors: [
          {
            field: "usernameOrEmail",
            message: "that username doesn't exist"
          }
        ]
      }
    }
    const valid = await argon2.verify(user.password, password)
    if (!valid) {
      return {
        errors: [
          {
            field: "password",
            message: "incorrect password"
          }
        ]
      }
    }

    req.session.userId = user.id

    return {
      user
    }
  }

  @Mutation(() => Boolean)
  logout(@Context() { req, res }) {
    return new Promise(resolve =>
      req.session.destroy(err => {
        res.clearCookie("ciq")
        if (err) {
          console.log(err)
          resolve(false)
          return
        }

        resolve(true)
      })
    )
  }
}
