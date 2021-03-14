import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CommentUpdateManyWithoutTaskInput } from "../inputs/CommentUpdateManyWithoutTaskInput";
import { DateTimeFieldUpdateOperationsInput } from "../inputs/DateTimeFieldUpdateOperationsInput";
import { NullableDateTimeFieldUpdateOperationsInput } from "../inputs/NullableDateTimeFieldUpdateOperationsInput";
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput";
import { ProjectUpdateOneRequiredWithoutTaskInput } from "../inputs/ProjectUpdateOneRequiredWithoutTaskInput";
import { StatusUpdateOneWithoutTaskInput } from "../inputs/StatusUpdateOneWithoutTaskInput";
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput";
import { TaskUpdateOneWithoutSubTasksInput } from "../inputs/TaskUpdateOneWithoutSubTasksInput";
import { UserUpdateOneRequiredWithoutCreatorTasksInput } from "../inputs/UserUpdateOneRequiredWithoutCreatorTasksInput";
import { UserUpdateOneWithoutAssigneeTasksInput } from "../inputs/UserUpdateOneWithoutAssigneeTasksInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TaskUpdateWithoutSubTasksInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: StringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: NullableStringFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  createdAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => DateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  updatedAt?: DateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => NullableDateTimeFieldUpdateOperationsInput, {
    nullable: true
  })
  deletedAt?: NullableDateTimeFieldUpdateOperationsInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpdateOneRequiredWithoutTaskInput, {
    nullable: true
  })
  project?: ProjectUpdateOneRequiredWithoutTaskInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutCreatorTasksInput, {
    nullable: true
  })
  creator?: UserUpdateOneRequiredWithoutCreatorTasksInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutAssigneeTasksInput, {
    nullable: true
  })
  assignee?: UserUpdateOneWithoutAssigneeTasksInput | undefined;

  @TypeGraphQL.Field(_type => CommentUpdateManyWithoutTaskInput, {
    nullable: true
  })
  comments?: CommentUpdateManyWithoutTaskInput | undefined;

  @TypeGraphQL.Field(_type => TaskUpdateOneWithoutSubTasksInput, {
    nullable: true
  })
  parentTask?: TaskUpdateOneWithoutSubTasksInput | undefined;

  @TypeGraphQL.Field(_type => StatusUpdateOneWithoutTaskInput, {
    nullable: true
  })
  status?: StatusUpdateOneWithoutTaskInput | undefined;
}
