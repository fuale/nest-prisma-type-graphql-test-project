import * as TypeGraphQL from "type-graphql"
import * as GraphQLScalars from "graphql-scalars"
import { Prisma } from "@prisma/client"
import { DecimalJSScalar } from "../../scalars"
import { TaskCreateWithoutAssigneeInput } from "../inputs/TaskCreateWithoutAssigneeInput"
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput"

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TaskCreateOrConnectWithoutAssigneeInput {
  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: false
  })
  where!: TaskWhereUniqueInput

  @TypeGraphQL.Field(_type => TaskCreateWithoutAssigneeInput, {
    nullable: false
  })
  create!: TaskCreateWithoutAssigneeInput
}
