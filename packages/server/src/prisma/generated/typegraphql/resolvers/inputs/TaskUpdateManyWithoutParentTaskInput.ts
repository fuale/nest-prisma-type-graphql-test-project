import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateOrConnectWithoutParentTaskInput } from "../inputs/TaskCreateOrConnectWithoutParentTaskInput";
import { TaskCreateWithoutParentTaskInput } from "../inputs/TaskCreateWithoutParentTaskInput";
import { TaskScalarWhereInput } from "../inputs/TaskScalarWhereInput";
import { TaskUpdateManyWithWhereWithoutParentTaskInput } from "../inputs/TaskUpdateManyWithWhereWithoutParentTaskInput";
import { TaskUpdateWithWhereUniqueWithoutParentTaskInput } from "../inputs/TaskUpdateWithWhereUniqueWithoutParentTaskInput";
import { TaskUpsertWithWhereUniqueWithoutParentTaskInput } from "../inputs/TaskUpsertWithWhereUniqueWithoutParentTaskInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TaskUpdateManyWithoutParentTaskInput {
  @TypeGraphQL.Field(_type => [TaskCreateWithoutParentTaskInput], {
    nullable: true
  })
  create?: TaskCreateWithoutParentTaskInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskCreateOrConnectWithoutParentTaskInput], {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutParentTaskInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskUpsertWithWhereUniqueWithoutParentTaskInput], {
    nullable: true
  })
  upsert?: TaskUpsertWithWhereUniqueWithoutParentTaskInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [TaskUpdateWithWhereUniqueWithoutParentTaskInput], {
    nullable: true
  })
  update?: TaskUpdateWithWhereUniqueWithoutParentTaskInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskUpdateManyWithWhereWithoutParentTaskInput], {
    nullable: true
  })
  updateMany?: TaskUpdateManyWithWhereWithoutParentTaskInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TaskScalarWhereInput[] | undefined;
}
