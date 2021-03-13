import * as TypeGraphQL from "type-graphql"
import * as GraphQLScalars from "graphql-scalars"
import { Prisma } from "@prisma/client"
import { DecimalJSScalar } from "../../scalars"
import { TaskCreateWithoutCreatorInput } from "../inputs/TaskCreateWithoutCreatorInput"
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput"

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TaskCreateOrConnectWithoutCreatorInput {
  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: false
  })
  where!: TaskWhereUniqueInput

  @TypeGraphQL.Field(_type => TaskCreateWithoutCreatorInput, {
    nullable: false
  })
  create!: TaskCreateWithoutCreatorInput
}
