import * as TypeGraphQL from "type-graphql"
import * as GraphQLScalars from "graphql-scalars"
import { Prisma } from "@prisma/client"
import { DecimalJSScalar } from "../../scalars"
import { TaskAvgAggregate } from "../outputs/TaskAvgAggregate"
import { TaskCountAggregate } from "../outputs/TaskCountAggregate"
import { TaskMaxAggregate } from "../outputs/TaskMaxAggregate"
import { TaskMinAggregate } from "../outputs/TaskMinAggregate"
import { TaskSumAggregate } from "../outputs/TaskSumAggregate"

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class AggregateTask {
  @TypeGraphQL.Field(_type => TaskCountAggregate, {
    nullable: true
  })
  count!: TaskCountAggregate | null

  @TypeGraphQL.Field(_type => TaskAvgAggregate, {
    nullable: true
  })
  avg!: TaskAvgAggregate | null

  @TypeGraphQL.Field(_type => TaskSumAggregate, {
    nullable: true
  })
  sum!: TaskSumAggregate | null

  @TypeGraphQL.Field(_type => TaskMinAggregate, {
    nullable: true
  })
  min!: TaskMinAggregate | null

  @TypeGraphQL.Field(_type => TaskMaxAggregate, {
    nullable: true
  })
  max!: TaskMaxAggregate | null
}
