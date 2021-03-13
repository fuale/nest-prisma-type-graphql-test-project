import * as TypeGraphQL from "type-graphql"
import * as GraphQLScalars from "graphql-scalars"
import { Prisma } from "@prisma/client"
import { DecimalJSScalar } from "../scalars"
import { Task } from "../models/Task"

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Comment {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  content!: string

  task?: Task | null

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  taskId?: number | null
}
