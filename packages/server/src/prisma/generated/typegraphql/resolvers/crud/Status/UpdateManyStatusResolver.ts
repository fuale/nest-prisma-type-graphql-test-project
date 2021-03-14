import * as TypeGraphQL from "type-graphql";
import { UpdateManyStatusArgs } from "./args/UpdateManyStatusArgs";
import { Status } from "../../../models/Status";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Status)
export class UpdateManyStatusResolver {
  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyStatusArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).status.updateMany(args);
  }
}
