import * as TypeGraphQL from "type-graphql";
import { Status } from "../../../models/Status";
import { Task } from "../../../models/Task";
import { StatusTaskArgs } from "./args/StatusTaskArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Status)
export class StatusRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Task], {
    nullable: false
  })
  async task(@TypeGraphQL.Root() status: Status, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: StatusTaskArgs): Promise<Task[]> {
    return getPrismaFromContext(ctx).status.findUnique({
      where: {
        id: status.id,
      },
    }).task(args);
  }
}
