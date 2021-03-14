import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TaskOrderByInput } from "../../../inputs/TaskOrderByInput";
import { TaskWhereInput } from "../../../inputs/TaskWhereInput";
import { TaskWhereUniqueInput } from "../../../inputs/TaskWhereUniqueInput";
import { TaskScalarFieldEnum } from "../../../../enums/TaskScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyTaskArgs {
  @TypeGraphQL.Field(_type => TaskWhereInput, {
    nullable: true
  })
  where?: TaskWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TaskOrderByInput], {
    nullable: true
  })
  orderBy?: TaskOrderByInput[] | undefined;

  @TypeGraphQL.Field(_type => TaskWhereUniqueInput, {
    nullable: true
  })
  cursor?: TaskWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [TaskScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "title" | "description" | "creatorId" | "assigneeId" | "parentTaskId" | "statusId" | "createdAt" | "updatedAt" | "deletedAt" | "projectId"> | undefined;
}
