import * as TypeGraphQL from "type-graphql"

export enum CommentScalarFieldEnum {
  id = "id",
  content = "content",
  taskId = "taskId"
}
TypeGraphQL.registerEnumType(CommentScalarFieldEnum, {
  name: "CommentScalarFieldEnum",
  description: undefined
})
