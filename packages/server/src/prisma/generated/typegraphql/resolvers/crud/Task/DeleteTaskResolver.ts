import * as TypeGraphQL from "type-graphql"
import { DeleteTaskArgs } from "./args/DeleteTaskArgs"
import { Task } from "../../../models/Task"
import { transformFields, getPrismaFromContext } from "../../../helpers"

@TypeGraphQL.Resolver(_of => Task)
export class DeleteTaskResolver {
  @TypeGraphQL.Mutation(_returns => Task, {
    nullable: true
  })
  async deleteTask(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteTaskArgs): Promise<Task | null> {
    return getPrismaFromContext(ctx).task.delete(args)
  }
}
