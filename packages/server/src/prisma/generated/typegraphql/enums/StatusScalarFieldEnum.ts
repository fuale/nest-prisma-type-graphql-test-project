import * as TypeGraphQL from "type-graphql";

export enum StatusScalarFieldEnum {
  id = "id",
  alias = "alias",
  title = "title"
}
TypeGraphQL.registerEnumType(StatusScalarFieldEnum, {
  name: "StatusScalarFieldEnum",
  description: undefined,
});
