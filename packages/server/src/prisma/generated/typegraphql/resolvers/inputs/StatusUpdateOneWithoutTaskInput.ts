import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatusCreateOrConnectWithoutTaskInput } from "../inputs/StatusCreateOrConnectWithoutTaskInput";
import { StatusCreateWithoutTaskInput } from "../inputs/StatusCreateWithoutTaskInput";
import { StatusUpdateWithoutTaskInput } from "../inputs/StatusUpdateWithoutTaskInput";
import { StatusUpsertWithoutTaskInput } from "../inputs/StatusUpsertWithoutTaskInput";
import { StatusWhereUniqueInput } from "../inputs/StatusWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class StatusUpdateOneWithoutTaskInput {
  @TypeGraphQL.Field(_type => StatusCreateWithoutTaskInput, {
    nullable: true
  })
  create?: StatusCreateWithoutTaskInput | undefined;

  @TypeGraphQL.Field(_type => StatusCreateOrConnectWithoutTaskInput, {
    nullable: true
  })
  connectOrCreate?: StatusCreateOrConnectWithoutTaskInput | undefined;

  @TypeGraphQL.Field(_type => StatusUpsertWithoutTaskInput, {
    nullable: true
  })
  upsert?: StatusUpsertWithoutTaskInput | undefined;

  @TypeGraphQL.Field(_type => StatusWhereUniqueInput, {
    nullable: true
  })
  connect?: StatusWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => StatusUpdateWithoutTaskInput, {
    nullable: true
  })
  update?: StatusUpdateWithoutTaskInput | undefined;
}
