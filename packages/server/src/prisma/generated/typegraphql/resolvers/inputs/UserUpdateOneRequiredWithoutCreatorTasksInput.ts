import * as TypeGraphQL from "type-graphql"
import * as GraphQLScalars from "graphql-scalars"
import { Prisma } from "@prisma/client"
import { DecimalJSScalar } from "../../scalars"
import { UserCreateOrConnectWithoutCreatorTasksInput } from "../inputs/UserCreateOrConnectWithoutCreatorTasksInput"
import { UserCreateWithoutCreatorTasksInput } from "../inputs/UserCreateWithoutCreatorTasksInput"
import { UserUpdateWithoutCreatorTasksInput } from "../inputs/UserUpdateWithoutCreatorTasksInput"
import { UserUpsertWithoutCreatorTasksInput } from "../inputs/UserUpsertWithoutCreatorTasksInput"
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput"

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutCreatorTasksInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutCreatorTasksInput, {
    nullable: true
  })
  create?: UserCreateWithoutCreatorTasksInput | undefined

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutCreatorTasksInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutCreatorTasksInput | undefined

  @TypeGraphQL.Field(_type => UserUpsertWithoutCreatorTasksInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutCreatorTasksInput | undefined

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined

  @TypeGraphQL.Field(_type => UserUpdateWithoutCreatorTasksInput, {
    nullable: true
  })
  update?: UserUpdateWithoutCreatorTasksInput | undefined
}
