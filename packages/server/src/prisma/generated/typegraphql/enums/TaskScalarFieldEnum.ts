import * as TypeGraphQL from "type-graphql"

export enum TaskScalarFieldEnum {
  id = "id",
  title = "title",
  description = "description",
  creatorId = "creatorId",
  assigneeId = "assigneeId"
}
TypeGraphQL.registerEnumType(TaskScalarFieldEnum, {
  name: "TaskScalarFieldEnum",
  description: undefined
})
