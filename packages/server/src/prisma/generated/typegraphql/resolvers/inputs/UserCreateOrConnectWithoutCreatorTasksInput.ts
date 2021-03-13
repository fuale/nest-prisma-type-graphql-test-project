import * as TypeGraphQL from "type-graphql"
import * as GraphQLScalars from "graphql-scalars"
import { Prisma } from "@prisma/client"
import { DecimalJSScalar } from "../../scalars"
import { UserCreateWithoutCreatorTasksInput } from "../inputs/UserCreateWithoutCreatorTasksInput"
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput"

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateOrConnectWithoutCreatorTasksInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput

  @TypeGraphQL.Field(_type => UserCreateWithoutCreatorTasksInput, {
    nullable: false
  })
  create!: UserCreateWithoutCreatorTasksInput
}
