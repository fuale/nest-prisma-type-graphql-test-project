import * as TypeGraphQL from "type-graphql";
import { Project } from "../../../models/Project";
import { Task } from "../../../models/Task";
import { ProjectTaskArgs } from "./args/ProjectTaskArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Project)
export class ProjectRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Task], {
    nullable: false
  })
  async task(@TypeGraphQL.Root() project: Project, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: ProjectTaskArgs): Promise<Task[]> {
    return getPrismaFromContext(ctx).project.findUnique({
      where: {
        id: project.id,
      },
    }).task(args);
  }
}
