import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { ProjectCreateNestedOneWithoutTaskInput } from "../inputs/ProjectCreateNestedOneWithoutTaskInput";
import { StatusCreateNestedOneWithoutTaskInput } from "../inputs/StatusCreateNestedOneWithoutTaskInput";
import { TaskCreateNestedManyWithoutParentTaskInput } from "../inputs/TaskCreateNestedManyWithoutParentTaskInput";
import { TaskCreateNestedOneWithoutSubTasksInput } from "../inputs/TaskCreateNestedOneWithoutSubTasksInput";
import { UserCreateNestedOneWithoutAssigneeTasksInput } from "../inputs/UserCreateNestedOneWithoutAssigneeTasksInput";
import { UserCreateNestedOneWithoutCreatorTasksInput } from "../inputs/UserCreateNestedOneWithoutCreatorTasksInput";

@TypeGraphQL.InputType({
  isAbstract: true
})
export class TaskCreateWithoutCommentsInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  description?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  createdAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  updatedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  deletedAt?: Date | undefined;

  @TypeGraphQL.Field(_type => ProjectCreateNestedOneWithoutTaskInput, {
    nullable: false
  })
  project!: ProjectCreateNestedOneWithoutTaskInput;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutCreatorTasksInput, {
    nullable: false
  })
  creator!: UserCreateNestedOneWithoutCreatorTasksInput;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutAssigneeTasksInput, {
    nullable: true
  })
  assignee?: UserCreateNestedOneWithoutAssigneeTasksInput | undefined;

  @TypeGraphQL.Field(_type => TaskCreateNestedManyWithoutParentTaskInput, {
    nullable: true
  })
  subTasks?: TaskCreateNestedManyWithoutParentTaskInput | undefined;

  @TypeGraphQL.Field(_type => TaskCreateNestedOneWithoutSubTasksInput, {
    nullable: true
  })
  parentTask?: TaskCreateNestedOneWithoutSubTasksInput | undefined;

  @TypeGraphQL.Field(_type => StatusCreateNestedOneWithoutTaskInput, {
    nullable: true
  })
  status?: StatusCreateNestedOneWithoutTaskInput | undefined;
}
