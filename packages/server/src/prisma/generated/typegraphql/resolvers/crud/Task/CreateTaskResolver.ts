import * as TypeGraphQL from "type-graphql";
import { CreateTaskArgs } from "./args/CreateTaskArgs";
import { Task } from "../../../models/Task";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Task)
export class CreateTaskResolver {
  @TypeGraphQL.Mutation(_returns => Task, {
    nullable: false
  })
  async createTask(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateTaskArgs): Promise<Task> {
    return getPrismaFromContext(ctx).task.create(args);
  }
}
