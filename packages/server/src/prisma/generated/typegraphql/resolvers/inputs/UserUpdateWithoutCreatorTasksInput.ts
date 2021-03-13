import * as TypeGraphQL from "type-graphql"
import * as GraphQLScalars from "graphql-scalars"
import { Prisma } from "@prisma/client"
import { DecimalJSScalar } from "../../scalars"
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput"
import { TaskUpdateManyWithoutAssigneeInput } from "../inputs/TaskUpdateManyWithoutAssigneeInput"

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateWithoutCreatorTasksInput {
  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  name?: StringFieldUpdateOperationsInput | undefined

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  email?: StringFieldUpdateOperationsInput | undefined

  @TypeGraphQL.Field(_type => StringFieldUpdateOperationsInput, {
    nullable: true
  })
  password?: StringFieldUpdateOperationsInput | undefined

  @TypeGraphQL.Field(_type => TaskUpdateManyWithoutAssigneeInput, {
    nullable: true
  })
  assigneeTasks?: TaskUpdateManyWithoutAssigneeInput | undefined
}
