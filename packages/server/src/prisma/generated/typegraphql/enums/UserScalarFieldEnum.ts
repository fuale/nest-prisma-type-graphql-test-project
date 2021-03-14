import * as TypeGraphQL from "type-graphql";

export enum UserScalarFieldEnum {
  id = "id",
  username = "username",
  firstname = "firstname",
  lastname = "lastname",
  sex = "sex",
  email = "email",
  password = "password",
  birthDate = "birthDate",
  createdAt = "createdAt",
  updatedAt = "updatedAt",
  deletedAt = "deletedAt"
}
TypeGraphQL.registerEnumType(UserScalarFieldEnum, {
  name: "UserScalarFieldEnum",
  description: undefined,
});
