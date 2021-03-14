import * as TypeGraphQL from "type-graphql";

export enum TaskScalarFieldEnum {
  id = "id",
  title = "title",
  description = "description",
  creatorId = "creatorId",
  assigneeId = "assigneeId",
  parentTaskId = "parentTaskId",
  statusId = "statusId",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  deletedAt = "deletedAt",
  projectId = "projectId"
}
TypeGraphQL.registerEnumType(TaskScalarFieldEnum, {
  name: "TaskScalarFieldEnum",
  description: undefined,
});
