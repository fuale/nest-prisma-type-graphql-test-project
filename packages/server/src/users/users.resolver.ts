import { Injectable, Req, Session } from "@nestjs/common"
import * as argon2 from "argon2"
import { Request, Response } from "express"
import { RedisService } from "nestjs-redis"
import { Query, Ctx, Mutation, Root, Resolver, InputType, Field, FieldResolver, ObjectType, Arg } from "type-graphql"
import { User } from "../prisma/generated/typegraphql"
import { PrismaService } from "../prisma/prisma.service"

interface Context {
  req: Request & { session: Record<string, any> }
  res: Response
}

@InputType()
class RegisterInput {
  @Field(() => String)
  firstname = ""

  @Field(() => String)
  lastname = ""

  @Field(() => String)
  email = ""

  @Field(() => String)
  username = ""

  @Field(() => String)
  password = ""
}

@ObjectType()
class FieldError {
  @Field()
  field?: string = "<empty>"

  @Field()
  message?: string = "<empty>"
}

@ObjectType()
class UserResponse {
  @Field(() => [FieldError], { nullable: true })
  errors?: FieldError[]

  @Field(() => User, { nullable: true })
  user?: User
}

@Injectable()
@Resolver(() => User)
export class UsersResolver {
  constructor(private prismaService: PrismaService, private redisService: RedisService) {}

  @FieldResolver(() => String)
  email(@Root() user: User, @Ctx() { req: { session } }: Context) {
    // this is the current user and its ok to show them their own email
    if (session.userId === user.id) {
      return user.email
    }
    // current user wants to see someone elses email
    return ""
  }

  @Query(() => User, { nullable: true })
  me(@Ctx() { req: { session } }: Context) {
    // you are not logged in
    if (!session.userId) {
      return null
    }

    return this.prismaService.user.findFirst({ where: { id: session.userId } })
  }

  @Mutation(() => UserResponse)
  async changePassword(
    @Arg("token") token: string,
    @Arg("newPassword") newPassword: string,
    @Req() req: Request
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
    Object.assign(req.session, { userId: user.id })

    return { user }
  }

  @Mutation(() => UserResponse)
  async register(
    @Arg("options")
    options: RegisterInput,
    @Req() req: Request
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
    let user: User | null = null

    try {
      user = await this.prismaService.user.create({
        data: {
          firstname: options.firstname,
          lastname: options.lastname,
          username: options.username,
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

    if (!user) {
      return {
        errors: [
          {
            field: "user",
            message: "can't create user"
          }
        ]
      }
    }

    // store user id session
    // this will set a cookie on the user
    // keep them logged in
    Object.assign(req.session, { userId: user.id })

    return { user }
  }

  @Mutation(() => UserResponse)
  async login(
    @Arg("usernameOrEmail") usernameOrEmail: string,
    @Arg("password") password: string,
    @Ctx() { req }: Context
  ): Promise<UserResponse> {
    let user: User | null
    if (usernameOrEmail.includes("@")) {
      user = await this.prismaService.user.findFirst({ where: { email: usernameOrEmail } })
    } else {
      user = await this.prismaService.user.findFirst({ where: { username: usernameOrEmail } })
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
  logout(@Ctx() { req, res }: { req: Request; res: Response }) {
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
