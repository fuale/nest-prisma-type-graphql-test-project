import * as TypeGraphQL from "type-graphql";
import { DeleteManyStatusArgs } from "./args/DeleteManyStatusArgs";
import { Status } from "../../../models/Status";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Status)
export class DeleteManyStatusResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyStatusArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).status.deleteMany(args);
  }
}
