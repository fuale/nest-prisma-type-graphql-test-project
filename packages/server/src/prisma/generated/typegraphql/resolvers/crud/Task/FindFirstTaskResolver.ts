import * as TypeGraphQL from "type-graphql"
import { FindFirstTaskArgs } from "./args/FindFirstTaskArgs"
import { Task } from "../../../models/Task"
import { transformFields, getPrismaFromContext } from "../../../helpers"

@TypeGraphQL.Resolver(_of => Task)
export class FindFirstTaskResolver {
  @TypeGraphQL.Query(_returns => Task, {
    nullable: true
  })
  async findFirstTask(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstTaskArgs): Promise<Task | null> {
    return getPrismaFromContext(ctx).task.findFirst(args)
  }
}
