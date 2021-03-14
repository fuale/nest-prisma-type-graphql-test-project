import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StringFilter } from "../inputs/StringFilter";
import { TaskListRelationFilter } from "../inputs/TaskListRelationFilter";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class StatusWhereInput {
  @TypeGraphQL.Field(_type => [StatusWhereInput], {
    nullable: true
  })
  AND?: StatusWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StatusWhereInput], {
    nullable: true
  })
  OR?: StatusWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [StatusWhereInput], {
    nullable: true
  })
  NOT?: StatusWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  id?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  alias?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  title?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => TaskListRelationFilter, {
    nullable: true
  })
  task?: TaskListRelationFilter | undefined;
}
