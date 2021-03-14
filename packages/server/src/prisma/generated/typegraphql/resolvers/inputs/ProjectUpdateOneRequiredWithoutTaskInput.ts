import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateOrConnectWithoutTaskInput } from "../inputs/ProjectCreateOrConnectWithoutTaskInput";
import { ProjectCreateWithoutTaskInput } from "../inputs/ProjectCreateWithoutTaskInput";
import { ProjectUpdateWithoutTaskInput } from "../inputs/ProjectUpdateWithoutTaskInput";
import { ProjectUpsertWithoutTaskInput } from "../inputs/ProjectUpsertWithoutTaskInput";
import { ProjectWhereUniqueInput } from "../inputs/ProjectWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class ProjectUpdateOneRequiredWithoutTaskInput {
  @TypeGraphQL.Field(_type => ProjectCreateWithoutTaskInput, {
    nullable: true
  })
  create?: ProjectCreateWithoutTaskInput | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateOrConnectWithoutTaskInput, {
    nullable: true
  })
  connectOrCreate?: ProjectCreateOrConnectWithoutTaskInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpsertWithoutTaskInput, {
    nullable: true
  })
  upsert?: ProjectUpsertWithoutTaskInput | undefined;

  @TypeGraphQL.Field(_type => ProjectWhereUniqueInput, {
    nullable: true
  })
  connect?: ProjectWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ProjectUpdateWithoutTaskInput, {
    nullable: true
  })
  update?: ProjectUpdateWithoutTaskInput | undefined;
}
