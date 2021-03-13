import * as TypeGraphQL from "type-graphql"
import * as GraphQLScalars from "graphql-scalars"
import { Prisma } from "@prisma/client"
import { DecimalJSScalar } from "../../scalars"
import { UserOrderByInput } from "../inputs/UserOrderByInput"
import { SortOrder } from "../../enums/SortOrder"

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TaskOrderByInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  title?: "asc" | "desc" | undefined

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined

  @TypeGraphQL.Field(_type => UserOrderByInput, {
    nullable: true
  })
  creator?: UserOrderByInput | undefined

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  creatorId?: "asc" | "desc" | undefined

  @TypeGraphQL.Field(_type => UserOrderByInput, {
    nullable: true
  })
  assignee?: UserOrderByInput | undefined

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  assigneeId?: "asc" | "desc" | undefined
}
