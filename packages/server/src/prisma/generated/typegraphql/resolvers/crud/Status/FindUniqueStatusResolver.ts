import * as TypeGraphQL from "type-graphql";
import { FindUniqueStatusArgs } from "./args/FindUniqueStatusArgs";
import { Status } from "../../../models/Status";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Status)
export class FindUniqueStatusResolver {
  @TypeGraphQL.Query(_returns => Status, {
    nullable: true
  })
  async status(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueStatusArgs): Promise<Status | null> {
    return getPrismaFromContext(ctx).status.findUnique(args);
  }
}
