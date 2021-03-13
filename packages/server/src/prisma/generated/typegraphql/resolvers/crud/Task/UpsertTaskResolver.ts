import * as TypeGraphQL from "type-graphql"
import { UpsertTaskArgs } from "./args/UpsertTaskArgs"
import { Task } from "../../../models/Task"
import { transformFields, getPrismaFromContext } from "../../../helpers"

@TypeGraphQL.Resolver(_of => Task)
export class UpsertTaskResolver {
  @TypeGraphQL.Mutation(_returns => Task, {
    nullable: false
  })
  async upsertTask(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertTaskArgs): Promise<Task> {
    return getPrismaFromContext(ctx).task.upsert(args)
  }
}
