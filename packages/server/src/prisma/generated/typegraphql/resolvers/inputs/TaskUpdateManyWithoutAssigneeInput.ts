import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateOrConnectWithoutAssigneeInput } from "../inputs/TaskCreateOrConnectWithoutAssigneeInput";
import { TaskCreateWithoutAssigneeInput } from "../inputs/TaskCreateWithoutAssigneeInput";
import { TaskScalarWhereInput } from "../inputs/TaskScalarWhereInput";
import { TaskUpdateManyWithWhereWithoutAssigneeInput } from "../inputs/TaskUpdateManyWithWhereWithoutAssigneeInput";
import { TaskUpdateWithWhereUniqueWithoutAssigneeInput } from "../inputs/TaskUpdateWithWhereUniqueWithoutAssigneeInput";
import { TaskUpsertWithWhereUniqueWithoutAssigneeInput } from "../inputs/TaskUpsertWithWhereUniqueWithoutAssigneeInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TaskUpdateManyWithoutAssigneeInput {
  @TypeGraphQL.Field(_type => [TaskCreateWithoutAssigneeInput], {
    nullable: true
  })
  create?: TaskCreateWithoutAssigneeInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskCreateOrConnectWithoutAssigneeInput], {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutAssigneeInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskUpsertWithWhereUniqueWithoutAssigneeInput], {
    nullable: true
  })
  upsert?: TaskUpsertWithWhereUniqueWithoutAssigneeInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskWhereUniqueInput], {
    nullable: true
  })
  connect?: TaskWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskWhereUniqueInput], {
    nullable: true
  })
  set?: TaskWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TaskWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskWhereUniqueInput], {
    nullable: true
  })
  delete?: TaskWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskUpdateWithWhereUniqueWithoutAssigneeInput], {
    nullable: true
  })
  update?: TaskUpdateWithWhereUniqueWithoutAssigneeInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskUpdateManyWithWhereWithoutAssigneeInput], {
    nullable: true
  })
  updateMany?: TaskUpdateManyWithWhereWithoutAssigneeInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TaskScalarWhereInput[] | undefined;
}
