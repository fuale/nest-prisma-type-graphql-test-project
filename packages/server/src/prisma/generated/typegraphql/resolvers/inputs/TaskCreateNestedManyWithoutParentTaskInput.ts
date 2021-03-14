import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateOrConnectWithoutParentTaskInput } from "../inputs/TaskCreateOrConnectWithoutParentTaskInput";
import { TaskCreateWithoutParentTaskInput } from "../inputs/TaskCreateWithoutParentTaskInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TaskCreateNestedManyWithoutParentTaskInput {
  @TypeGraphQL.Field(_type => [TaskCreateWithoutParentTaskInput], {
    nullable: true
  })
  create?: TaskCreateWithoutParentTaskInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskCreateOrConnectWithoutParentTaskInput], {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutParentTaskInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskWhereUniqueInput], {
    nullable: true
  })
  connect?: TaskWhereUniqueInput[] | undefined;
}
