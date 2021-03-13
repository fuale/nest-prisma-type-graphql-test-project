import * as TypeGraphQL from "type-graphql"
import graphqlFields from "graphql-fields"
import { GraphQLResolveInfo } from "graphql"
import { AggregateTaskArgs } from "./args/AggregateTaskArgs"
import { CreateTaskArgs } from "./args/CreateTaskArgs"
import { DeleteManyTaskArgs } from "./args/DeleteManyTaskArgs"
import { DeleteTaskArgs } from "./args/DeleteTaskArgs"
import { FindFirstTaskArgs } from "./args/FindFirstTaskArgs"
import { FindManyTaskArgs } from "./args/FindManyTaskArgs"
import { FindUniqueTaskArgs } from "./args/FindUniqueTaskArgs"
import { UpdateManyTaskArgs } from "./args/UpdateManyTaskArgs"
import { UpdateTaskArgs } from "./args/UpdateTaskArgs"
import { UpsertTaskArgs } from "./args/UpsertTaskArgs"
import { transformFields, getPrismaFromContext } from "../../../helpers"
import { Task } from "../../../models/Task"
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput"
import { AggregateTask } from "../../outputs/AggregateTask"

@TypeGraphQL.Resolver(_of => Task)
export class TaskCrudResolver {
  @TypeGraphQL.Query(_returns => Task, {
    nullable: true
  })
  async task(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueTaskArgs): Promise<Task | null> {
    return getPrismaFromContext(ctx).task.findUnique(args)
  }

  @TypeGraphQL.Query(_returns => Task, {
    nullable: true
  })
  async findFirstTask(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstTaskArgs): Promise<Task | null> {
    return getPrismaFromContext(ctx).task.findFirst(args)
  }

  @TypeGraphQL.Query(_returns => [Task], {
    nullable: false
  })
  async tasks(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyTaskArgs): Promise<Task[]> {
    return getPrismaFromContext(ctx).task.findMany(args)
  }

  @TypeGraphQL.Mutation(_returns => Task, {
    nullable: false
  })
  async createTask(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateTaskArgs): Promise<Task> {
    return getPrismaFromContext(ctx).task.create(args)
  }

  @TypeGraphQL.Mutation(_returns => Task, {
    nullable: true
  })
  async deleteTask(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteTaskArgs): Promise<Task | null> {
    return getPrismaFromContext(ctx).task.delete(args)
  }

  @TypeGraphQL.Mutation(_returns => Task, {
    nullable: true
  })
  async updateTask(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateTaskArgs): Promise<Task | null> {
    return getPrismaFromContext(ctx).task.update(args)
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyTask(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: DeleteManyTaskArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).task.deleteMany(args)
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyTask(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: UpdateManyTaskArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).task.updateMany(args)
  }

  @TypeGraphQL.Mutation(_returns => Task, {
    nullable: false
  })
  async upsertTask(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertTaskArgs): Promise<Task> {
    return getPrismaFromContext(ctx).task.upsert(args)
  }

  @TypeGraphQL.Query(_returns => AggregateTask, {
    nullable: false
  })
  async aggregateTask(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Info() info: GraphQLResolveInfo,
    @TypeGraphQL.Args() args: AggregateTaskArgs
  ): Promise<AggregateTask> {
    return getPrismaFromContext(ctx).task.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any))
    })
  }
}
