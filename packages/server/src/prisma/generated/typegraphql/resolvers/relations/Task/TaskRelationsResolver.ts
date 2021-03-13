import * as TypeGraphQL from "type-graphql"
import { Comment } from "../../../models/Comment"
import { Task } from "../../../models/Task"
import { User } from "../../../models/User"
import { TaskCommentsArgs } from "./args/TaskCommentsArgs"
import { transformFields, getPrismaFromContext } from "../../../helpers"

@TypeGraphQL.Resolver(_of => Task)
export class TaskRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async creator(@TypeGraphQL.Root() task: Task, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx)
      .task.findUnique({
        where: {
          id: task.id
        }
      })
      .creator({})
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async assignee(@TypeGraphQL.Root() task: Task, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx)
      .task.findUnique({
        where: {
          id: task.id
        }
      })
      .assignee({})
  }

  @TypeGraphQL.FieldResolver(_type => [Comment], {
    nullable: false
  })
  async comments(
    @TypeGraphQL.Root() task: Task,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: TaskCommentsArgs
  ): Promise<Comment[]> {
    return getPrismaFromContext(ctx)
      .task.findUnique({
        where: {
          id: task.id
        }
      })
      .comments(args)
  }
}
