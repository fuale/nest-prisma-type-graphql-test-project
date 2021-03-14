import * as TypeGraphQL from "type-graphql";

export enum CommentScalarFieldEnum {
  id = "id",
  content = "content",
  taskId = "taskId",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  deletedAt = "deletedAt"
}
TypeGraphQL.registerEnumType(CommentScalarFieldEnum, {
  name: "CommentScalarFieldEnum",
  description: undefined,
});
