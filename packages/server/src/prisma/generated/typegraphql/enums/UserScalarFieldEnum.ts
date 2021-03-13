import * as TypeGraphQL from "type-graphql"

export enum UserScalarFieldEnum {
  id = "id",
  name = "name",
  email = "email",
  password = "password"
}
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined
})