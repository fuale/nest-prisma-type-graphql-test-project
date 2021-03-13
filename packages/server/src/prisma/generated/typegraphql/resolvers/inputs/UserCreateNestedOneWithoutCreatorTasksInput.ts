import * as TypeGraphQL from "type-graphql"
import * as GraphQLScalars from "graphql-scalars"
import { Prisma } from "@prisma/client"
import { DecimalJSScalar } from "../../scalars"
import { UserCreateOrConnectWithoutCreatorTasksInput } from "../inputs/UserCreateOrConnectWithoutCreatorTasksInput"
import { UserCreateWithoutCreatorTasksInput } from "../inputs/UserCreateWithoutCreatorTasksInput"
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput"

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedOneWithoutCreatorTasksInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutCreatorTasksInput, {
    nullable: true
  })
  create?: UserCreateWithoutCreatorTasksInput | undefined

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCreatorTasksInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutCreatorTasksInput | undefined

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined
}
