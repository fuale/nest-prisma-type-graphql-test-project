import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateWithoutTaskInput } from "../inputs/ProjectCreateWithoutTaskInput";
import { ProjectUpdateWithoutTaskInput } from "../inputs/ProjectUpdateWithoutTaskInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectUpsertWithoutTaskInput {
  @TypeGraphQL.Field(_type => ProjectUpdateWithoutTaskInput, {
    nullable: false
  })
  update!: ProjectUpdateWithoutTaskInput;

  @TypeGraphQL.Field(_type => ProjectCreateWithoutTaskInput, {
    nullable: false
  })
  create!: ProjectCreateWithoutTaskInput;
}
