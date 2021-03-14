import * as TypeGraphQL from "type-graphql";
import { DeleteManyTaskArgs } from "./args/DeleteManyTaskArgs";
import { Task } from "../../../models/Task";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Task)
export class DeleteManyTaskResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyTask(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyTaskArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).task.deleteMany(args);
  }
}
