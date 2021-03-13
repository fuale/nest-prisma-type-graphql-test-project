import * as TypeGraphQL from "type-graphql"
import { FindUniqueTaskArgs } from "./args/FindUniqueTaskArgs"
import { Task } from "../../../models/Task"
import { transformFields, getPrismaFromContext } from "../../../helpers"

@TypeGraphQL.Resolver(_of => Task)
export class FindUniqueTaskResolver {
  @TypeGraphQL.Query(_returns => Task, {
    nullable: true
  })
  async task(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueTaskArgs): Promise<Task | null> {
    return getPrismaFromContext(ctx).task.findUnique(args)
  }
}
