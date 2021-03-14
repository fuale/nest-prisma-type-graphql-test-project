import * as TypeGraphQL from "type-graphql";
import { UpdateTaskArgs } from "./args/UpdateTaskArgs";
import { Task } from "../../../models/Task";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Task)
export class UpdateTaskResolver {
  @TypeGraphQL.Mutation(_returns => Task, {
    nullable: true
  })
  async updateTask(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateTaskArgs): Promise<Task | null> {
    return getPrismaFromContext(ctx).task.update(args);
  }
}
