import * as TypeGraphQL from "type-graphql"
import { FindManyTaskArgs } from "./args/FindManyTaskArgs"
import { Task } from "../../../models/Task"
import { transformFields, getPrismaFromContext } from "../../../helpers"

@TypeGraphQL.Resolver(_of => Task)
export class FindManyTaskResolver {
  @TypeGraphQL.Query(_returns => [Task], {
    nullable: false
  })
  async tasks(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyTaskArgs): Promise<Task[]> {
    return getPrismaFromContext(ctx).task.findMany(args)
  }
}
