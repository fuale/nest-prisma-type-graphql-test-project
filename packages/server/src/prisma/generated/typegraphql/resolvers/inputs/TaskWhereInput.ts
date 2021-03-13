import * as TypeGraphQL from "type-graphql"
import * as GraphQLScalars from "graphql-scalars"
import { Prisma } from "@prisma/client"
import { DecimalJSScalar } from "../../scalars"
import { CommentListRelationFilter } from "../inputs/CommentListRelationFilter"
import { IntFilter } from "../inputs/IntFilter"
import { IntNullableFilter } from "../inputs/IntNullableFilter"
import { StringFilter } from "../inputs/StringFilter"
import { StringNullableFilter } from "../inputs/StringNullableFilter"
import { UserRelationFilter } from "../inputs/UserRelationFilter"

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TaskWhereInput {
  @TypeGraphQL.Field(_type => [TaskWhereInput], {
    nullable: true
  })
  AND?: TaskWhereInput[] | undefined

  @TypeGraphQL.Field(_type => [TaskWhereInput], {
    nullable: true
  })
  OR?: TaskWhereInput[] | undefined

  @TypeGraphQL.Field(_type => [TaskWhereInput], {
    nullable: true
  })
  NOT?: TaskWhereInput[] | undefined

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  description?: StringNullableFilter | undefined

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  creator?: UserRelationFilter | undefined

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  creatorId?: IntFilter | undefined

  @TypeGraphQL.Field(_type => UserRelationFilter, {
    nullable: true
  })
  assignee?: UserRelationFilter | undefined

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  assigneeId?: IntNullableFilter | undefined

  @TypeGraphQL.Field(_type => CommentListRelationFilter, {
    nullable: true
  })
  comments?: CommentListRelationFilter | undefined
}
