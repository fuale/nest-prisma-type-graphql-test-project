import * as TypeGraphQL from "type-graphql";
import { CreateStatusArgs } from "./args/CreateStatusArgs";
import { Status } from "../../../models/Status";
import { transformFields, getPrismaFromContext } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Status)
export class CreateStatusResolver {
  @TypeGraphQL.Mutation(_returns => Status, {
    nullable: false
  })
  async createStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateStatusArgs): Promise<Status> {
    return getPrismaFromContext(ctx).status.create(args);
  }
}
