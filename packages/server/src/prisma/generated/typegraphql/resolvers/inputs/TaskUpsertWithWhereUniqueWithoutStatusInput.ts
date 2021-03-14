import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateWithoutStatusInput } from "../inputs/TaskCreateWithoutStatusInput";
import { TaskUpdateWithoutStatusInput } from "../inputs/TaskUpdateWithoutStatusInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TaskUpsertWithWhereUniqueWithoutStatusInput {
  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: false
  })
  where!: TaskWhereUniqueInput;

  @TypeGraphQL.Field(_type => TaskUpdateWithoutStatusInput, {
    nullable: false
  })
  update!: TaskUpdateWithoutStatusInput;

  @TypeGraphQL.Field(_type => TaskCreateWithoutStatusInput, {
    nullable: false
  })
  create!: TaskCreateWithoutStatusInput;
}
