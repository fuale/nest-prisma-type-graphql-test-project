import * as TypeGraphQL from "type-graphql";
import { UpdateStatusArgs } from "./args/UpdateStatusArgs";
import { Status } from "../../../models/Status";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Status)
export class UpdateStatusResolver {
  @TypeGraphQL.Mutation(_returns => Status, {
    nullable: true
  })
  async updateStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateStatusArgs): Promise<Status | null> {
    return getPrismaFromContext(ctx).status.update(args);
  }
}
