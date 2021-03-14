import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TaskCreateOrConnectWithoutStatusInput } from "../inputs/TaskCreateOrConnectWithoutStatusInput";
import { TaskCreateWithoutStatusInput } from "../inputs/TaskCreateWithoutStatusInput";
import { TaskWhereUniqueInput } from "../inputs/TaskWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TaskCreateNestedManyWithoutStatusInput {
  @TypeGraphQL.Field(_type => [TaskCreateWithoutStatusInput], {
    nullable: true
  })
  create?: TaskCreateWithoutStatusInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskCreateOrConnectWithoutStatusInput], {
    nullable: true
  })
  connectOrCreate?: TaskCreateOrConnectWithoutStatusInput[] | undefined;

  @TypeGraphQL.Field(_type => [TaskWhereUniqueInput], {
    nullable: true
  })
  connect?: TaskWhereUniqueInput[] | undefined;
}
