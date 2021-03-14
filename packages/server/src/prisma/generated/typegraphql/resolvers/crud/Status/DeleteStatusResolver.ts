import * as TypeGraphQL from "type-graphql";
import { DeleteStatusArgs } from "./args/DeleteStatusArgs";
import { Status } from "../../../models/Status";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Status)
export class DeleteStatusResolver {
  @TypeGraphQL.Mutation(_returns => Status, {
    nullable: true
  })
  async deleteStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteStatusArgs): Promise<Status | null> {
    return getPrismaFromContext(ctx).status.delete(args);
  }
}
