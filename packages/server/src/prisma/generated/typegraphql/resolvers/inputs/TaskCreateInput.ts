import * as TypeGraphQL from "type-graphql"
import * as GraphQLScalars from "graphql-scalars"
import { Prisma } from "@prisma/client"
import { DecimalJSScalar } from "../../scalars"
import { CommentCreateNestedManyWithoutTaskInput } from "../inputs/CommentCreateNestedManyWithoutTaskInput"
import { UserCreateNestedOneWithoutAssigneeTasksInput } from "../inputs/UserCreateNestedOneWithoutAssigneeTasksInput"
import { UserCreateNestedOneWithoutCreatorTasksInput } from "../inputs/UserCreateNestedOneWithoutCreatorTasksInput"

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TaskCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCreatorTasksInput, {
    nullable: false
  })
  creator!: UserCreateNestedOneWithoutCreatorTasksInput

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutAssigneeTasksInput, {
    nullable: true
  })
  assignee?: UserCreateNestedOneWithoutAssigneeTasksInput | undefined

  @TypeGraphQL.Field(_type => CommentCreateNestedManyWithoutTaskInput, {
    nullable: true
  })
  comments?: CommentCreateNestedManyWithoutTaskInput | undefined
}
