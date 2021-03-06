import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateOrConnectWithoutCreatorInput } from "../inputs/TaskCreateOrConnectWithoutCreatorInput";
import { TaskCreateWithoutCreatorInput } from "../inputs/TaskCreateWithoutCreatorInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TaskCreateNestedManyWithoutCreatorInput {
  @TypeGraphQL.Field(_type => [TaskCreateWithoutCreatorInput], {
    nullable: true
  })
  create?: TaskCreateWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskCreateOrConnectWithoutCreatorInput], {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutCreatorInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskWhereUniqueInput], {
    nullable: true
  })
  connect?: TaskWhereUniqueInput[] | undefined;
}
