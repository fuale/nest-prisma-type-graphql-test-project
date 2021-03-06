import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateWithoutSubTasksInput } from "../inputs/TaskCreateWithoutSubTasksInput";
import { TaskUpdateWithoutSubTasksInput } from "../inputs/TaskUpdateWithoutSubTasksInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TaskUpsertWithoutSubTasksInput {
  @TypeGraphQL.Field(_type => TaskUpdateWithoutSubTasksInput, {
    nullable: false
  })
  update!: TaskUpdateWithoutSubTasksInput;

  @TypeGraphQL.Field(_type => TaskCreateWithoutSubTasksInput, {
    nullable: false
  })
  create!: TaskCreateWithoutSubTasksInput;
}
