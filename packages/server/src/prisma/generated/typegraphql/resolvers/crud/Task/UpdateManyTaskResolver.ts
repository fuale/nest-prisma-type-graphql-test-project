import * as TypeGraphQL from "type-graphql"
import { UpdateManyTaskArgs } from "./args/UpdateManyTaskArgs"
import { Task } from "../../../models/Task"
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput"
import { transformFields, getPrismaFromContext } from "../../../helpers"

@TypeGraphQL.Resolver(_of => Task)
export class UpdateManyTaskResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyTask(
    @TypeGraphQL.Ctx() ctx: any,
    @TypeGraphQL.Args() args: UpdateManyTaskArgs
  ): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).task.updateMany(args)
  }
}
