import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskUpdateWithoutAssigneeInput } from "../inputs/TaskUpdateWithoutAssigneeInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TaskUpdateWithWhereUniqueWithoutAssigneeInput {
  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: false
  })
  where!: TaskWhereUniqueInput;

  @TypeGraphQL.Field(_type => TaskUpdateWithoutAssigneeInput, {
    nullable: false
  })
  data!: TaskUpdateWithoutAssigneeInput;
}
