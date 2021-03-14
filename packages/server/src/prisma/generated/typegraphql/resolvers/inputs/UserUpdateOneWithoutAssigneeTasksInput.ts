import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutAssigneeTasksInput } from "../inputs/UserCreateOrConnectWithoutAssigneeTasksInput";
import { UserCreateWithoutAssigneeTasksInput } from "../inputs/UserCreateWithoutAssigneeTasksInput";
import { UserUpdateWithoutAssigneeTasksInput } from "../inputs/UserUpdateWithoutAssigneeTasksInput";
import { UserUpsertWithoutAssigneeTasksInput } from "../inputs/UserUpsertWithoutAssigneeTasksInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateOneWithoutAssigneeTasksInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutAssigneeTasksInput, {
    nullable: true
  })
  create?: UserCreateWithoutAssigneeTasksInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutAssigneeTasksInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutAssigneeTasksInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutAssigneeTasksInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutAssigneeTasksInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutAssigneeTasksInput, {
    nullable: true
  })
  update?: UserUpdateWithoutAssigneeTasksInput | undefined;
}
