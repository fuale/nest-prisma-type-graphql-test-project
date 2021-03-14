import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { StatusCreateOrConnectWithoutTaskInput } from "../inputs/StatusCreateOrConnectWithoutTaskInput";
import { StatusCreateWithoutTaskInput } from "../inputs/StatusCreateWithoutTaskInput";
import { StatusWhereUniqueInput } from "../inputs/StatusWhereUniqueInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class StatusCreateNestedOneWithoutTaskInput {
  @TypeGraphQL.Field(_type => StatusCreateWithoutTaskInput, {
    nullable: true
  })
  create?: StatusCreateWithoutTaskInput | undefined;

  @TypeGraphQL.Field(_type => StatusCreateOrConnectWithoutTaskInput, {
    nullable: true
  })
  connectOrCreate?: StatusCreateOrConnectWithoutTaskInput | undefined;

  @TypeGraphQL.Field(_type => StatusWhereUniqueInput, {
    nullable: true
  })
  connect?: StatusWhereUniqueInput | undefined;
}
