import * as TypeGraphQL from "type-graphql"
import * as GraphQLScalars from "graphql-scalars"
import { Prisma } from "@prisma/client"
import { DecimalJSScalar } from "../../scalars"
import { StringFieldUpdateOperationsInput } from "../inputs/StringFieldUpdateOperationsInput"
import { TaskUpdateManyWithoutCreatorInput } from "../inputs/TaskUpdateManyWithoutCreatorInput"

@TypeGraphQL.InputType({
  isAbstract: true
})
export class UserUpdateWithoutAssigneeTasksInput {
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

  @TypeGraphQL.Field(_type => TaskUpdateManyWithoutCreatorInput, {
    nullable: true
  })
  creatorTasks?: TaskUpdateManyWithoutCreatorInput | undefined
}
