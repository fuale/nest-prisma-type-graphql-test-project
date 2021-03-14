import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateWithoutParentTaskInput } from "../inputs/TaskCreateWithoutParentTaskInput";
import { TaskUpdateWithoutParentTaskInput } from "../inputs/TaskUpdateWithoutParentTaskInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TaskUpsertWithWhereUniqueWithoutParentTaskInput {
  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: false
  })
  where!: TaskWhereUniqueInput;

  @TypeGraphQL.Field(_type => TaskUpdateWithoutParentTaskInput, {
    nullable: false
  })
  update!: TaskUpdateWithoutParentTaskInput;

  @TypeGraphQL.Field(_type => TaskCreateWithoutParentTaskInput, {
    nullable: false
  })
  create!: TaskCreateWithoutParentTaskInput;
}
