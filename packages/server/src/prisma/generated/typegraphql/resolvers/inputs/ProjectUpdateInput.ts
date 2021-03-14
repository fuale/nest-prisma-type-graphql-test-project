import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TaskUpdateManyWithoutProjectInput } from "../inputs/TaskUpdateManyWithoutProjectInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectUpdateInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  key?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => TaskUpdateManyWithoutProjectInput, {
    nullable: true
  })
  task?: TaskUpdateManyWithoutProjectInput | undefined;
}
