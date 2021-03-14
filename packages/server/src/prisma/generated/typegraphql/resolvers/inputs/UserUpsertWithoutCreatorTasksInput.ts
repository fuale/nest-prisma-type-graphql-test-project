import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutCreatorTasksInput } from "../inputs/UserCreateWithoutCreatorTasksInput";
import { UserUpdateWithoutCreatorTasksInput } from "../inputs/UserUpdateWithoutCreatorTasksInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutCreatorTasksInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutCreatorTasksInput, {
    nullable: false
  })
  update!: UserUpdateWithoutCreatorTasksInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutCreatorTasksInput, {
    nullable: false
  })
  create!: UserCreateWithoutCreatorTasksInput;
}
