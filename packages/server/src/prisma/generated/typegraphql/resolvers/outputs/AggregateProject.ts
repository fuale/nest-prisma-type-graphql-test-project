import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectAvgAggregate } from "../outputs/ProjectAvgAggregate";
import { ProjectCountAggregate } from "../outputs/ProjectCountAggregate";
import { ProjectMaxAggregate } from "../outputs/ProjectMaxAggregate";
import { ProjectMinAggregate } from "../outputs/ProjectMinAggregate";
import { ProjectSumAggregate } from "../outputs/ProjectSumAggregate";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateProject {
  @TypeGraphQL.Field(_type => ProjectCountAggregate, {
    nullable: true
  })
  count!: ProjectCountAggregate | null;

  @TypeGraphQL.Field(_type => ProjectAvgAggregate, {
    nullable: true
  })
  avg!: ProjectAvgAggregate | null;

  @TypeGraphQL.Field(_type => ProjectSumAggregate, {
    nullable: true
  })
  sum!: ProjectSumAggregate | null;

  @TypeGraphQL.Field(_type => ProjectMinAggregate, {
    nullable: true
  })
  min!: ProjectMinAggregate | null;

  @TypeGraphQL.Field(_type => ProjectMaxAggregate, {
    nullable: true
  })
  max!: ProjectMaxAggregate | null;
}
