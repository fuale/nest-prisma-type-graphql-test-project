import * as TypeGraphQL from "type-graphql"
import { Task } from "../../../models/Task"
import { User } from "../../../models/User"
import { UserAssigneeTasksArgs } from "./args/UserAssigneeTasksArgs"
import { UserCreatorTasksArgs } from "./args/UserCreatorTasksArgs"
import { transformFields, getPrismaFromContext } from "../../../helpers"

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Task], {
    nullable: false
  })
  async creatorTasks(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: UserCreatorTasksArgs
  ): Promise<Task[]> {
    return getPrismaFromContext(ctx)
      .user.findUnique({
        where: {
          id: user.id
        }
      })
      .creatorTasks(args)
  }

  @TypeGraphQL.FieldResolver(_type => [Task], {
    nullable: false
  })
  async assigneeTasks(
    @TypeGraphQL.Root() user: User,
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: UserAssigneeTasksArgs
  ): Promise<Task[]> {
    return getPrismaFromContext(ctx)
      .user.findUnique({
        where: {
          id: user.id
        }
      })
      .assigneeTasks(args)
  }
}
