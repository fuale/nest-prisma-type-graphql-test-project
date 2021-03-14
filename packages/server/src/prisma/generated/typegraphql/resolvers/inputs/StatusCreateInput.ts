import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateNestedManyWithoutStatusInput } from "../inputs/TaskCreateNestedManyWithoutStatusInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class StatusCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  id?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  alias!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => TaskCreateNestedManyWithoutStatusInput, {
    nullable: true
  })
  task?: TaskCreateNestedManyWithoutStatusInput | undefined;
}
