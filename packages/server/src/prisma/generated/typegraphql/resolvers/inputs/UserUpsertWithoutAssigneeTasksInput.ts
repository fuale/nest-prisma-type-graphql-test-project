import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutAssigneeTasksInput } from "../inputs/UserCreateWithoutAssigneeTasksInput";
import { UserUpdateWithoutAssigneeTasksInput } from "../inputs/UserUpdateWithoutAssigneeTasksInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpsertWithoutAssigneeTasksInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutAssigneeTasksInput, {
    nullable: false
  })
  update!: UserUpdateWithoutAssigneeTasksInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutAssigneeTasksInput, {
    nullable: false
  })
  create!: UserCreateWithoutAssigneeTasksInput;
}
