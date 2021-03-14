import * as TypeGraphQL from "type-graphql";

export enum Sex {
  MALE = "MALE",
  FEMALE = "FEMALE",
  UNKNOWN = "UNKNOWN"
}
TypeGraphQL.registerEnumType(Sex, {
  name: "Sex",
  description: undefined,
});
