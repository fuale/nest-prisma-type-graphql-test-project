import * as TypeGraphQL from "type-graphql";
import { UpsertStatusArgs } from "./args/UpsertStatusArgs";
import { Status } from "../../../models/Status";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Status)
export class UpsertStatusResolver {
  @TypeGraphQL.Mutation(_returns => Status, {
    nullable: false
  })
  async upsertStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertStatusArgs): Promise<Status> {
    return getPrismaFromContext(ctx).status.upsert(args);
  }
}
