import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatusCreateWithoutTaskInput } from "../inputs/StatusCreateWithoutTaskInput";
import { StatusWhereUniqueInput } from "../inputs/StatusWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class StatusCreateOrConnectWithoutTaskInput {
  @TypeGraphQL.Field(_type => StatusWhereUniqueInput, {
    nullable: false
  })
  where!: StatusWhereUniqueInput;

  @TypeGraphQL.Field(_type => StatusCreateWithoutTaskInput, {
    nullable: false
  })
  create!: StatusCreateWithoutTaskInput;
}
