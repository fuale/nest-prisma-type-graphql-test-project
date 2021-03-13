import * as TypeGraphQL from "type-graphql"
import * as GraphQLScalars from "graphql-scalars"
import { Prisma } from "@prisma/client"
import { DecimalJSScalar } from "../scalars"
import { Task } from "../models/Task"

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class User {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  email!: string

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  password!: string

  creatorTasks?: Task[]

  assigneeTasks?: Task[]
}