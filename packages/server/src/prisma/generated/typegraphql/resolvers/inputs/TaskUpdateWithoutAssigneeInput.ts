import * as TypeGraphQL from "type-graphql"
import * as GraphQLScalars from "graphql-scalars"
import { Prisma } from "@prisma/client"
import { DecimalJSScalar } from "../../scalars"
import { CommentUpdateManyWithoutTaskInput } from "../inputs/CommentUpdateManyWithoutTaskInput"
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput"
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput"
import { UserUpdateOneRequiredWithoutCreatorTasksInput } from "../inputs/UserUpdateOneRequiredWithoutCreatorTasksInput"

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TaskUpdateWithoutAssigneeInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  title?: StringFieldUpdateOperationsInput | undefined

  @TypeGraphQL.Field(_type => NullableStringFieldUpdateOperationsInput, {
    nullable: true
  })
  description?: NullableStringFieldUpdateOperationsInput | undefined

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutCreatorTasksInput, {
    nullable: true
  })
  creator?: UserUpdateOneRequiredWithoutCreatorTasksInput | undefined

  @TypeGraphQL.Field(_type => CommentUpdateManyWithoutTaskInput, {
    nullable: true
  })
  comments?: CommentUpdateManyWithoutTaskInput | undefined
}
