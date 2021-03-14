import * as TypeGraphQL from "type-graphql";
import { Comment } from "../../../models/Comment";
import { Project } from "../../../models/Project";
import { Status } from "../../../models/Status";
import { Task } from "../../../models/Task";
import { User } from "../../../models/User";
import { TaskCommentsArgs } from "./args/TaskCommentsArgs";
import { TaskSubTasksArgs } from "./args/TaskSubTasksArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Task)
export class TaskRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Project, {
    nullable: false
  })
  async project(@TypeGraphQL.Root() task: Task, @TypeGraphQL.Ctx() ctx: any): Promise<Project> {
    return getPrismaFromContext(ctx).task.findUnique({
      where: {
        id: task.id,
      },
    }).project({});
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async creator(@TypeGraphQL.Root() task: Task, @TypeGraphQL.Ctx() ctx: any): Promise<User> {
    return getPrismaFromContext(ctx).task.findUnique({
      where: {
        id: task.id,
      },
    }).creator({});
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: true
  })
  async assignee(@TypeGraphQL.Root() task: Task, @TypeGraphQL.Ctx() ctx: any): Promise<User | null> {
    return getPrismaFromContext(ctx).task.findUnique({
      where: {
        id: task.id,
      },
    }).assignee({});
  }

  @TypeGraphQL.FieldResolver(_type => [Comment], {
    nullable: false
  })
  async comments(@TypeGraphQL.Root() task: Task, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TaskCommentsArgs): Promise<Comment[]> {
    return getPrismaFromContext(ctx).task.findUnique({
      where: {
        id: task.id,
      },
    }).comments(args);
  }

  @TypeGraphQL.FieldResolver(_type => [Task], {
    nullable: false
  })
  async subTasks(@TypeGraphQL.Root() task: Task, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: TaskSubTasksArgs): Promise<Task[]> {
    return getPrismaFromContext(ctx).task.findUnique({
      where: {
        id: task.id,
      },
    }).subTasks(args);
  }

  @TypeGraphQL.FieldResolver(_type => Task, {
    nullable: true
  })
  async parentTask(@TypeGraphQL.Root() task: Task, @TypeGraphQL.Ctx() ctx: any): Promise<Task | null> {
    return getPrismaFromContext(ctx).task.findUnique({
      where: {
        id: task.id,
      },
    }).parentTask({});
  }

  @TypeGraphQL.FieldResolver(_type => Status, {
    nullable: true
  })
  async status(@TypeGraphQL.Root() task: Task, @TypeGraphQL.Ctx() ctx: any): Promise<Status | null> {
    return getPrismaFromContext(ctx).task.findUnique({
      where: {
        id: task.id,
      },
    }).status({});
  }
}
