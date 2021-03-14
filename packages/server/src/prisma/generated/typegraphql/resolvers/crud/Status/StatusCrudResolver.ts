import * as TypeGraphQL from "type-graphql";
import graphqlFields from "graphql-fields";
import { GraphQLResolveInfo } from "graphql";
import { AggregateStatusArgs } from "./args/AggregateStatusArgs";
import { CreateStatusArgs } from "./args/CreateStatusArgs";
import { DeleteManyStatusArgs } from "./args/DeleteManyStatusArgs";
import { DeleteStatusArgs } from "./args/DeleteStatusArgs";
import { FindFirstStatusArgs } from "./args/FindFirstStatusArgs";
import { FindManyStatusArgs } from "./args/FindManyStatusArgs";
import { FindUniqueStatusArgs } from "./args/FindUniqueStatusArgs";
import { UpdateManyStatusArgs } from "./args/UpdateManyStatusArgs";
import { UpdateStatusArgs } from "./args/UpdateStatusArgs";
import { UpsertStatusArgs } from "./args/UpsertStatusArgs";
import { transformFields, getPrismaFromContext } from "../../../helpers";
import { Status } from "../../../models/Status";
import { AffectedRowsOutput } from "../../outputs/AffectedRowsOutput";
import { AggregateStatus } from "../../outputs/AggregateStatus";

@TypeGraphQL.Resolver(_of => Status)
export class StatusCrudResolver {
  @TypeGraphQL.Query(_returns => Status, {
    nullable: true
  })
  async status(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindUniqueStatusArgs): Promise<Status | null> {
    return getPrismaFromContext(ctx).status.findUnique(args);
  }

  @TypeGraphQL.Query(_returns => Status, {
    nullable: true
  })
  async findFirstStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindFirstStatusArgs): Promise<Status | null> {
    return getPrismaFromContext(ctx).status.findFirst(args);
  }

  @TypeGraphQL.Query(_returns => [Status], {
    nullable: false
  })
  async statuses(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: FindManyStatusArgs): Promise<Status[]> {
    return getPrismaFromContext(ctx).status.findMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Status, {
    nullable: false
  })
  async createStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: CreateStatusArgs): Promise<Status> {
    return getPrismaFromContext(ctx).status.create(args);
  }

  @TypeGraphQL.Mutation(_returns => Status, {
    nullable: true
  })
  async deleteStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteStatusArgs): Promise<Status | null> {
    return getPrismaFromContext(ctx).status.delete(args);
  }

  @TypeGraphQL.Mutation(_returns => Status, {
    nullable: true
  })
  async updateStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateStatusArgs): Promise<Status | null> {
    return getPrismaFromContext(ctx).status.update(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async deleteManyStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: DeleteManyStatusArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).status.deleteMany(args);
  }

  @TypeGraphQL.Mutation(_returns => AffectedRowsOutput, {
    nullable: false
  })
  async updateManyStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpdateManyStatusArgs): Promise<AffectedRowsOutput> {
    return getPrismaFromContext(ctx).status.updateMany(args);
  }

  @TypeGraphQL.Mutation(_returns => Status, {
    nullable: false
  })
  async upsertStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Args() args: UpsertStatusArgs): Promise<Status> {
    return getPrismaFromContext(ctx).status.upsert(args);
  }

  @TypeGraphQL.Query(_returns => AggregateStatus, {
    nullable: false
  })
  async aggregateStatus(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateStatusArgs): Promise<AggregateStatus> {
    return getPrismaFromContext(ctx).status.aggregate({
      ...args,
      ...transformFields(graphqlFields(info as any)),
    });
  }
}
