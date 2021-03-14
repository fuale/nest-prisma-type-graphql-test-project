import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { Task } from "../models/Task";

@TypeGraphQL.ObjectType({
  isAbstract: true
})
export class Status {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  id!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  alias!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  task?: Task[];
}
