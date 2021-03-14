import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatusCreateWithoutTaskInput } from "../inputs/StatusCreateWithoutTaskInput";
import { StatusUpdateWithoutTaskInput } from "../inputs/StatusUpdateWithoutTaskInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class StatusUpsertWithoutTaskInput {
  @TypeGraphQL.Field(_type => StatusUpdateWithoutTaskInput, {
    nullable: false
  })
  update!: StatusUpdateWithoutTaskInput;

  @TypeGraphQL.Field(_type => StatusCreateWithoutTaskInput, {
    nullable: false
  })
  create!: StatusCreateWithoutTaskInput;
}
