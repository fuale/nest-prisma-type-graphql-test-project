import * as TypeGraphQL from "type-graphql"
import * as GraphQLScalars from "graphql-scalars"
import { Prisma } from "@prisma/client"
import { DecimalJSScalar } from "../../scalars"
import { TaskCreateOrConnectWithoutAssigneeInput } from "../inputs/TaskCreateOrConnectWithoutAssigneeInput"
import { TaskCreateWithoutAssigneeInput } from "../inputs/TaskCreateWithoutAssigneeInput"
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput"

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TaskCreateNestedManyWithoutAssigneeInput {
  @TypeGraphQL.Field(_type => [TaskCreateWithoutAssigneeInput], {
    nullable: true
  })
  create?: TaskCreateWithoutAssigneeInput[] | undefined

  @TypeGraphQL.Field(_type => [TaskCreateOrConnectWithoutAssigneeInput], {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutAssigneeInput[] | undefined

  @TypeGraphQL.Field(_type => [TaskWhereUniqueInput], {
    nullable: true
  })
  connect?: TaskWhereUniqueInput[] | undefined
}
