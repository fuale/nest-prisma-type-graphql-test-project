import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateOrConnectWithoutStatusInput } from "../inputs/TaskCreateOrConnectWithoutStatusInput";
import { TaskCreateWithoutStatusInput } from "../inputs/TaskCreateWithoutStatusInput";
import { TaskScalarWhereInput } from "../inputs/TaskScalarWhereInput";
import { TaskUpdateManyWithWhereWithoutStatusInput } from "../inputs/TaskUpdateManyWithWhereWithoutStatusInput";
import { TaskUpdateWithWhereUniqueWithoutStatusInput } from "../inputs/TaskUpdateWithWhereUniqueWithoutStatusInput";
import { TaskUpsertWithWhereUniqueWithoutStatusInput } from "../inputs/TaskUpsertWithWhereUniqueWithoutStatusInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TaskUpdateManyWithoutStatusInput {
  @TypeGraphQL.Field(_type => [TaskCreateWithoutStatusInput], {
    nullable: true
  })
  create?: TaskCreateWithoutStatusInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskCreateOrConnectWithoutStatusInput], {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutStatusInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskUpsertWithWhereUniqueWithoutStatusInput], {
    nullable: true
  })
  upsert?: TaskUpsertWithWhereUniqueWithoutStatusInput[] | undefined;

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

  @TypeGraphQL.Field(_type => [TaskUpdateWithWhereUniqueWithoutStatusInput], {
    nullable: true
  })
  update?: TaskUpdateWithWhereUniqueWithoutStatusInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskUpdateManyWithWhereWithoutStatusInput], {
    nullable: true
  })
  updateMany?: TaskUpdateManyWithWhereWithoutStatusInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TaskScalarWhereInput[] | undefined;
}
