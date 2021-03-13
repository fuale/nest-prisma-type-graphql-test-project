import * as TypeGraphQL from "type-graphql"
import * as GraphQLScalars from "graphql-scalars"
import { Prisma } from "@prisma/client"
import { DecimalJSScalar } from "../../scalars"
import { NullableStringFieldUpdateOperationsInput } from "../inputs/NullableStringFieldUpdateOperationsInput"
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput"
import { UserUpdateOneRequiredWithoutCreatorTasksInput } from "../inputs/UserUpdateOneRequiredWithoutCreatorTasksInput"
import { UserUpdateOneWithoutAssigneeTasksInput } from "../inputs/UserUpdateOneWithoutAssigneeTasksInput"

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TaskUpdateWithoutCommentsInput {
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

  @TypeGraphQL.Field(_type => UserUpdateOneWithoutAssigneeTasksInput, {
    nullable: true
  })
  assignee?: UserUpdateOneWithoutAssigneeTasksInput | undefined
}
