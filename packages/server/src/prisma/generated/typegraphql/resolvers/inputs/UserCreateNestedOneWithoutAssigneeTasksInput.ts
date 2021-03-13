import * as TypeGraphQL from "type-graphql"
import * as GraphQLScalars from "graphql-scalars"
import { Prisma } from "@prisma/client"
import { DecimalJSScalar } from "../../scalars"
import { UserCreateOrConnectWithoutAssigneeTasksInput } from "../inputs/UserCreateOrConnectWithoutAssigneeTasksInput"
import { UserCreateWithoutAssigneeTasksInput } from "../inputs/UserCreateWithoutAssigneeTasksInput"
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput"

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserCreateNestedOneWithoutAssigneeTasksInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutAssigneeTasksInput, {
    nullable: true
  })
  create?: UserCreateWithoutAssigneeTasksInput | undefined

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutAssigneeTasksInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutAssigneeTasksInput | undefined

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined
}
