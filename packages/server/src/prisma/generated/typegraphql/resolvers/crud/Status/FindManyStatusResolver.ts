import * as TypeGraphQL from "type-graphql";
import { FindManyStatusArgs } from "./args/FindManyStatusArgs";
import { Status } from "../../../models/Status";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Status)
export class FindManyStatusResolver {
  @TypeGraphQL.Query(_returns => [Status], {
    nullable: false
  })
  async statuses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyStatusArgs): Promise<Status[]> {
    return getPrismaFromContext(ctx).status.findMany(args);
  }
}
