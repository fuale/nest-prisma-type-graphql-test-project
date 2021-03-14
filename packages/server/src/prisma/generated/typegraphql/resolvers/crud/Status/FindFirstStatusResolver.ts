import * as TypeGraphQL from "type-graphql";
import { FindFirstStatusArgs } from "./args/FindFirstStatusArgs";
import { Status } from "../../../models/Status";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Status)
export class FindFirstStatusResolver {
  @TypeGraphQL.Query(_returns => Status, {
    nullable: true
  })
  async findFirstStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstStatusArgs): Promise<Status | null> {
    return getPrismaFromContext(ctx).status.findFirst(args);
  }
}
