import * as TypeGraphQL from "type-graphql"
import * as GraphQLScalars from "graphql-scalars"
import { Prisma } from "@prisma/client"
import { DecimalJSScalar } from "../scalars"
import { Comment } from "../models/Comment"
import { User } from "../models/User"

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Task {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | null

  creator?: User

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  creatorId!: number

  assignee?: User | null

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  assigneeId?: number | null

  comments?: Comment[]
}
