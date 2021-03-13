import * as TypeGraphQL from "type-graphql"
import * as GraphQLScalars from "graphql-scalars"
import { Prisma } from "@prisma/client"
import { DecimalJSScalar } from "../../scalars"
import { IntFilter } from "../inputs/IntFilter"
import { StringFilter } from "../inputs/StringFilter"
import { TaskListRelationFilter } from "../inputs/TaskListRelationFilter"

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserWhereInput {
  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  AND?: UserWhereInput[] | undefined

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  OR?: UserWhereInput[] | undefined

  @TypeGraphQL.Field(_type => [UserWhereInput], {
    nullable: true
  })
  NOT?: UserWhereInput[] | undefined

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  email?: StringFilter | undefined

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  password?: StringFilter | undefined

  @TypeGraphQL.Field(_type => TaskListRelationFilter, {
    nullable: true
  })
  creatorTasks?: TaskListRelationFilter | undefined

  @TypeGraphQL.Field(_type => TaskListRelationFilter, {
    nullable: true
  })
  assigneeTasks?: TaskListRelationFilter | undefined
}