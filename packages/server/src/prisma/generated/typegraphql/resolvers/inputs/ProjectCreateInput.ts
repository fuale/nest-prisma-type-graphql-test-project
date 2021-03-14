import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateNestedManyWithoutProjectInput } from "../inputs/TaskCreateNestedManyWithoutProjectInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  key!: string;

  @TypeGraphQL.Field(_type => TaskCreateNestedManyWithoutProjectInput, {
    nullable: true
  })
  task?: TaskCreateNestedManyWithoutProjectInput | undefined;
}
