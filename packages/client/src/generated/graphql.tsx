import gql from "graphql-tag"
import * as Urql from "urql"
export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
}

export type AffectedRowsOutput = {
  __typename?: "AffectedRowsOutput"
  count: Scalars["Int"]
}

export type AggregateTask = {
  __typename?: "AggregateTask"
  avg?: Maybe<TaskAvgAggregate>
  count?: Maybe<TaskCountAggregate>
  max?: Maybe<TaskMaxAggregate>
  min?: Maybe<TaskMinAggregate>
  sum?: Maybe<TaskSumAggregate>
}

export type AggregateUser = {
  __typename?: "AggregateUser"
  avg?: Maybe<UserAvgAggregate>
  count?: Maybe<UserCountAggregate>
  max?: Maybe<UserMaxAggregate>
  min?: Maybe<UserMinAggregate>
  sum?: Maybe<UserSumAggregate>
}

export type CommentCreateNestedManyWithoutTaskInput = {
  connect?: Maybe<Array<CommentWhereUniqueInput>>
  connectOrCreate?: Maybe<Array<CommentCreateOrConnectWithoutTaskInput>>
  create?: Maybe<Array<CommentCreateWithoutTaskInput>>
}

export type CommentCreateOrConnectWithoutTaskInput = {
  create: CommentCreateWithoutTaskInput
  where: CommentWhereUniqueInput
}

export type CommentCreateWithoutTaskInput = {
  content: Scalars["String"]
}

export type CommentListRelationFilter = {
  every?: Maybe<CommentWhereInput>
  none?: Maybe<CommentWhereInput>
  some?: Maybe<CommentWhereInput>
}

export type CommentScalarWhereInput = {
  AND?: Maybe<Array<CommentScalarWhereInput>>
  NOT?: Maybe<Array<CommentScalarWhereInput>>
  OR?: Maybe<Array<CommentScalarWhereInput>>
  content?: Maybe<StringFilter>
  id?: Maybe<IntFilter>
  taskId?: Maybe<IntNullableFilter>
}

export type CommentUpdateManyMutationInput = {
  content?: Maybe<StringFieldUpdateOperationsInput>
}

export type CommentUpdateManyWithWhereWithoutTaskInput = {
  data: CommentUpdateManyMutationInput
  where: CommentScalarWhereInput
}

export type CommentUpdateManyWithoutTaskInput = {
  connect?: Maybe<Array<CommentWhereUniqueInput>>
  connectOrCreate?: Maybe<Array<CommentCreateOrConnectWithoutTaskInput>>
  create?: Maybe<Array<CommentCreateWithoutTaskInput>>
  delete?: Maybe<Array<CommentWhereUniqueInput>>
  deleteMany?: Maybe<Array<CommentScalarWhereInput>>
  disconnect?: Maybe<Array<CommentWhereUniqueInput>>
  set?: Maybe<Array<CommentWhereUniqueInput>>
  update?: Maybe<Array<CommentUpdateWithWhereUniqueWithoutTaskInput>>
  updateMany?: Maybe<Array<CommentUpdateManyWithWhereWithoutTaskInput>>
  upsert?: Maybe<Array<CommentUpsertWithWhereUniqueWithoutTaskInput>>
}

export type CommentUpdateWithWhereUniqueWithoutTaskInput = {
  data: CommentUpdateWithoutTaskInput
  where: CommentWhereUniqueInput
}

export type CommentUpdateWithoutTaskInput = {
  content?: Maybe<StringFieldUpdateOperationsInput>
}

export type CommentUpsertWithWhereUniqueWithoutTaskInput = {
  create: CommentCreateWithoutTaskInput
  update: CommentUpdateWithoutTaskInput
  where: CommentWhereUniqueInput
}

export type CommentWhereInput = {
  AND?: Maybe<Array<CommentWhereInput>>
  NOT?: Maybe<Array<CommentWhereInput>>
  OR?: Maybe<Array<CommentWhereInput>>
  content?: Maybe<StringFilter>
  id?: Maybe<IntFilter>
  task?: Maybe<TaskRelationFilter>
  taskId?: Maybe<IntNullableFilter>
}

export type CommentWhereUniqueInput = {
  id?: Maybe<Scalars["Int"]>
}

export type IntFilter = {
  equals?: Maybe<Scalars["Int"]>
  gt?: Maybe<Scalars["Int"]>
  gte?: Maybe<Scalars["Int"]>
  in?: Maybe<Array<Scalars["Int"]>>
  lt?: Maybe<Scalars["Int"]>
  lte?: Maybe<Scalars["Int"]>
  not?: Maybe<NestedIntFilter>
  notIn?: Maybe<Array<Scalars["Int"]>>
}

export type IntNullableFilter = {
  equals?: Maybe<Scalars["Int"]>
  gt?: Maybe<Scalars["Int"]>
  gte?: Maybe<Scalars["Int"]>
  in?: Maybe<Array<Scalars["Int"]>>
  lt?: Maybe<Scalars["Int"]>
  lte?: Maybe<Scalars["Int"]>
  not?: Maybe<NestedIntNullableFilter>
  notIn?: Maybe<Array<Scalars["Int"]>>
}

export type Mutation = {
  __typename?: "Mutation"
  createTask: Task
  createUser: User
  deleteManyTask: AffectedRowsOutput
  deleteManyUser: AffectedRowsOutput
  deleteTask?: Maybe<Task>
  deleteUser?: Maybe<User>
  updateManyTask: AffectedRowsOutput
  updateManyUser: AffectedRowsOutput
  updateTask?: Maybe<Task>
  updateUser?: Maybe<User>
  upsertTask: Task
  upsertUser: User
}

export type MutationCreateTaskArgs = {
  data: TaskCreateInput
}

export type MutationCreateUserArgs = {
  data: UserCreateInput
}

export type MutationDeleteManyTaskArgs = {
  where?: Maybe<TaskWhereInput>
}

export type MutationDeleteManyUserArgs = {
  where?: Maybe<UserWhereInput>
}

export type MutationDeleteTaskArgs = {
  where: TaskWhereUniqueInput
}

export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput
}

export type MutationUpdateManyTaskArgs = {
  data: TaskUpdateManyMutationInput
  where?: Maybe<TaskWhereInput>
}

export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput
  where?: Maybe<UserWhereInput>
}

export type MutationUpdateTaskArgs = {
  data: TaskUpdateInput
  where: TaskWhereUniqueInput
}

export type MutationUpdateUserArgs = {
  data: UserUpdateInput
  where: UserWhereUniqueInput
}

export type MutationUpsertTaskArgs = {
  create: TaskCreateInput
  update: TaskUpdateInput
  where: TaskWhereUniqueInput
}

export type MutationUpsertUserArgs = {
  create: UserCreateInput
  update: UserUpdateInput
  where: UserWhereUniqueInput
}

export type NestedIntFilter = {
  equals?: Maybe<Scalars["Int"]>
  gt?: Maybe<Scalars["Int"]>
  gte?: Maybe<Scalars["Int"]>
  in?: Maybe<Array<Scalars["Int"]>>
  lt?: Maybe<Scalars["Int"]>
  lte?: Maybe<Scalars["Int"]>
  not?: Maybe<NestedIntFilter>
  notIn?: Maybe<Array<Scalars["Int"]>>
}

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars["Int"]>
  gt?: Maybe<Scalars["Int"]>
  gte?: Maybe<Scalars["Int"]>
  in?: Maybe<Array<Scalars["Int"]>>
  lt?: Maybe<Scalars["Int"]>
  lte?: Maybe<Scalars["Int"]>
  not?: Maybe<NestedIntNullableFilter>
  notIn?: Maybe<Array<Scalars["Int"]>>
}

export type NestedStringFilter = {
  contains?: Maybe<Scalars["String"]>
  endsWith?: Maybe<Scalars["String"]>
  equals?: Maybe<Scalars["String"]>
  gt?: Maybe<Scalars["String"]>
  gte?: Maybe<Scalars["String"]>
  in?: Maybe<Array<Scalars["String"]>>
  lt?: Maybe<Scalars["String"]>
  lte?: Maybe<Scalars["String"]>
  not?: Maybe<NestedStringFilter>
  notIn?: Maybe<Array<Scalars["String"]>>
  startsWith?: Maybe<Scalars["String"]>
}

export type NestedStringNullableFilter = {
  contains?: Maybe<Scalars["String"]>
  endsWith?: Maybe<Scalars["String"]>
  equals?: Maybe<Scalars["String"]>
  gt?: Maybe<Scalars["String"]>
  gte?: Maybe<Scalars["String"]>
  in?: Maybe<Array<Scalars["String"]>>
  lt?: Maybe<Scalars["String"]>
  lte?: Maybe<Scalars["String"]>
  not?: Maybe<NestedStringNullableFilter>
  notIn?: Maybe<Array<Scalars["String"]>>
  startsWith?: Maybe<Scalars["String"]>
}

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars["String"]>
}

export type Query = {
  __typename?: "Query"
  aggregateTask: AggregateTask
  aggregateUser: AggregateUser
  findFirstTask?: Maybe<Task>
  findFirstUser?: Maybe<User>
  task?: Maybe<Task>
  tasks: Array<Task>
  user?: Maybe<User>
  users: Array<User>
}

export type QueryAggregateTaskArgs = {
  cursor?: Maybe<TaskWhereUniqueInput>
  orderBy?: Maybe<Array<TaskOrderByInput>>
  skip?: Maybe<Scalars["Int"]>
  take?: Maybe<Scalars["Int"]>
  where?: Maybe<TaskWhereInput>
}

export type QueryAggregateUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>
  orderBy?: Maybe<Array<UserOrderByInput>>
  skip?: Maybe<Scalars["Int"]>
  take?: Maybe<Scalars["Int"]>
  where?: Maybe<UserWhereInput>
}

export type QueryFindFirstTaskArgs = {
  cursor?: Maybe<TaskWhereUniqueInput>
  distinct?: Maybe<Array<TaskScalarFieldEnum>>
  orderBy?: Maybe<Array<TaskOrderByInput>>
  skip?: Maybe<Scalars["Int"]>
  take?: Maybe<Scalars["Int"]>
  where?: Maybe<TaskWhereInput>
}

export type QueryFindFirstUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>
  distinct?: Maybe<Array<UserScalarFieldEnum>>
  orderBy?: Maybe<Array<UserOrderByInput>>
  skip?: Maybe<Scalars["Int"]>
  take?: Maybe<Scalars["Int"]>
  where?: Maybe<UserWhereInput>
}

export type QueryTaskArgs = {
  where: TaskWhereUniqueInput
}

export type QueryTasksArgs = {
  cursor?: Maybe<TaskWhereUniqueInput>
  distinct?: Maybe<Array<TaskScalarFieldEnum>>
  orderBy?: Maybe<Array<TaskOrderByInput>>
  skip?: Maybe<Scalars["Int"]>
  take?: Maybe<Scalars["Int"]>
  where?: Maybe<TaskWhereInput>
}

export type QueryUserArgs = {
  where: UserWhereUniqueInput
}

export type QueryUsersArgs = {
  cursor?: Maybe<UserWhereUniqueInput>
  distinct?: Maybe<Array<UserScalarFieldEnum>>
  orderBy?: Maybe<Array<UserOrderByInput>>
  skip?: Maybe<Scalars["Int"]>
  take?: Maybe<Scalars["Int"]>
  where?: Maybe<UserWhereInput>
}

export enum SortOrder {
  Asc = "asc",
  Desc = "desc"
}

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars["String"]>
}

export type StringFilter = {
  contains?: Maybe<Scalars["String"]>
  endsWith?: Maybe<Scalars["String"]>
  equals?: Maybe<Scalars["String"]>
  gt?: Maybe<Scalars["String"]>
  gte?: Maybe<Scalars["String"]>
  in?: Maybe<Array<Scalars["String"]>>
  lt?: Maybe<Scalars["String"]>
  lte?: Maybe<Scalars["String"]>
  not?: Maybe<NestedStringFilter>
  notIn?: Maybe<Array<Scalars["String"]>>
  startsWith?: Maybe<Scalars["String"]>
}

export type StringNullableFilter = {
  contains?: Maybe<Scalars["String"]>
  endsWith?: Maybe<Scalars["String"]>
  equals?: Maybe<Scalars["String"]>
  gt?: Maybe<Scalars["String"]>
  gte?: Maybe<Scalars["String"]>
  in?: Maybe<Array<Scalars["String"]>>
  lt?: Maybe<Scalars["String"]>
  lte?: Maybe<Scalars["String"]>
  not?: Maybe<NestedStringNullableFilter>
  notIn?: Maybe<Array<Scalars["String"]>>
  startsWith?: Maybe<Scalars["String"]>
}

export type Task = {
  __typename?: "Task"
  assigneeId?: Maybe<Scalars["Int"]>
  creatorId: Scalars["Int"]
  description?: Maybe<Scalars["String"]>
  id: Scalars["Int"]
  title: Scalars["String"]
}

export type TaskAvgAggregate = {
  __typename?: "TaskAvgAggregate"
  assigneeId?: Maybe<Scalars["Float"]>
  creatorId: Scalars["Float"]
  id: Scalars["Float"]
}

export type TaskCountAggregate = {
  __typename?: "TaskCountAggregate"
  _all: Scalars["Int"]
  assigneeId?: Maybe<Scalars["Int"]>
  creatorId: Scalars["Int"]
  description?: Maybe<Scalars["Int"]>
  id: Scalars["Int"]
  title?: Maybe<Scalars["Int"]>
}

export type TaskCreateInput = {
  assignee?: Maybe<UserCreateNestedOneWithoutAssigneeTasksInput>
  comments?: Maybe<CommentCreateNestedManyWithoutTaskInput>
  creator: UserCreateNestedOneWithoutCreatorTasksInput
  description?: Maybe<Scalars["String"]>
  title: Scalars["String"]
}

export type TaskCreateNestedManyWithoutAssigneeInput = {
  connect?: Maybe<Array<TaskWhereUniqueInput>>
  connectOrCreate?: Maybe<Array<TaskCreateOrConnectWithoutAssigneeInput>>
  create?: Maybe<Array<TaskCreateWithoutAssigneeInput>>
}

export type TaskCreateNestedManyWithoutCreatorInput = {
  connect?: Maybe<Array<TaskWhereUniqueInput>>
  connectOrCreate?: Maybe<Array<TaskCreateOrConnectWithoutCreatorInput>>
  create?: Maybe<Array<TaskCreateWithoutCreatorInput>>
}

export type TaskCreateOrConnectWithoutAssigneeInput = {
  create: TaskCreateWithoutAssigneeInput
  where: TaskWhereUniqueInput
}

export type TaskCreateOrConnectWithoutCreatorInput = {
  create: TaskCreateWithoutCreatorInput
  where: TaskWhereUniqueInput
}

export type TaskCreateWithoutAssigneeInput = {
  comments?: Maybe<CommentCreateNestedManyWithoutTaskInput>
  creator: UserCreateNestedOneWithoutCreatorTasksInput
  description?: Maybe<Scalars["String"]>
  title: Scalars["String"]
}

export type TaskCreateWithoutCreatorInput = {
  assignee?: Maybe<UserCreateNestedOneWithoutAssigneeTasksInput>
  comments?: Maybe<CommentCreateNestedManyWithoutTaskInput>
  description?: Maybe<Scalars["String"]>
  title: Scalars["String"]
}

export type TaskListRelationFilter = {
  every?: Maybe<TaskWhereInput>
  none?: Maybe<TaskWhereInput>
  some?: Maybe<TaskWhereInput>
}

export type TaskMaxAggregate = {
  __typename?: "TaskMaxAggregate"
  assigneeId?: Maybe<Scalars["Int"]>
  creatorId: Scalars["Int"]
  description?: Maybe<Scalars["String"]>
  id: Scalars["Int"]
  title?: Maybe<Scalars["String"]>
}

export type TaskMinAggregate = {
  __typename?: "TaskMinAggregate"
  assigneeId?: Maybe<Scalars["Int"]>
  creatorId: Scalars["Int"]
  description?: Maybe<Scalars["String"]>
  id: Scalars["Int"]
  title?: Maybe<Scalars["String"]>
}

export type TaskOrderByInput = {
  assignee?: Maybe<UserOrderByInput>
  assigneeId?: Maybe<SortOrder>
  creator?: Maybe<UserOrderByInput>
  creatorId?: Maybe<SortOrder>
  description?: Maybe<SortOrder>
  id?: Maybe<SortOrder>
  title?: Maybe<SortOrder>
}

export type TaskRelationFilter = {
  is?: Maybe<TaskWhereInput>
  isNot?: Maybe<TaskWhereInput>
}

export enum TaskScalarFieldEnum {
  AssigneeId = "assigneeId",
  CreatorId = "creatorId",
  Description = "description",
  Id = "id",
  Title = "title"
}

export type TaskScalarWhereInput = {
  AND?: Maybe<Array<TaskScalarWhereInput>>
  NOT?: Maybe<Array<TaskScalarWhereInput>>
  OR?: Maybe<Array<TaskScalarWhereInput>>
  assigneeId?: Maybe<IntNullableFilter>
  creatorId?: Maybe<IntFilter>
  description?: Maybe<StringNullableFilter>
  id?: Maybe<IntFilter>
  title?: Maybe<StringFilter>
}

export type TaskSumAggregate = {
  __typename?: "TaskSumAggregate"
  assigneeId?: Maybe<Scalars["Int"]>
  creatorId: Scalars["Int"]
  id: Scalars["Int"]
}

export type TaskUpdateInput = {
  assignee?: Maybe<UserUpdateOneWithoutAssigneeTasksInput>
  comments?: Maybe<CommentUpdateManyWithoutTaskInput>
  creator?: Maybe<UserUpdateOneRequiredWithoutCreatorTasksInput>
  description?: Maybe<NullableStringFieldUpdateOperationsInput>
  title?: Maybe<StringFieldUpdateOperationsInput>
}

export type TaskUpdateManyMutationInput = {
  description?: Maybe<NullableStringFieldUpdateOperationsInput>
  title?: Maybe<StringFieldUpdateOperationsInput>
}

export type TaskUpdateManyWithWhereWithoutAssigneeInput = {
  data: TaskUpdateManyMutationInput
  where: TaskScalarWhereInput
}

export type TaskUpdateManyWithWhereWithoutCreatorInput = {
  data: TaskUpdateManyMutationInput
  where: TaskScalarWhereInput
}

export type TaskUpdateManyWithoutAssigneeInput = {
  connect?: Maybe<Array<TaskWhereUniqueInput>>
  connectOrCreate?: Maybe<Array<TaskCreateOrConnectWithoutAssigneeInput>>
  create?: Maybe<Array<TaskCreateWithoutAssigneeInput>>
  delete?: Maybe<Array<TaskWhereUniqueInput>>
  deleteMany?: Maybe<Array<TaskScalarWhereInput>>
  disconnect?: Maybe<Array<TaskWhereUniqueInput>>
  set?: Maybe<Array<TaskWhereUniqueInput>>
  update?: Maybe<Array<TaskUpdateWithWhereUniqueWithoutAssigneeInput>>
  updateMany?: Maybe<Array<TaskUpdateManyWithWhereWithoutAssigneeInput>>
  upsert?: Maybe<Array<TaskUpsertWithWhereUniqueWithoutAssigneeInput>>
}

export type TaskUpdateManyWithoutCreatorInput = {
  connect?: Maybe<Array<TaskWhereUniqueInput>>
  connectOrCreate?: Maybe<Array<TaskCreateOrConnectWithoutCreatorInput>>
  create?: Maybe<Array<TaskCreateWithoutCreatorInput>>
  delete?: Maybe<Array<TaskWhereUniqueInput>>
  deleteMany?: Maybe<Array<TaskScalarWhereInput>>
  disconnect?: Maybe<Array<TaskWhereUniqueInput>>
  set?: Maybe<Array<TaskWhereUniqueInput>>
  update?: Maybe<Array<TaskUpdateWithWhereUniqueWithoutCreatorInput>>
  updateMany?: Maybe<Array<TaskUpdateManyWithWhereWithoutCreatorInput>>
  upsert?: Maybe<Array<TaskUpsertWithWhereUniqueWithoutCreatorInput>>
}

export type TaskUpdateWithWhereUniqueWithoutAssigneeInput = {
  data: TaskUpdateWithoutAssigneeInput
  where: TaskWhereUniqueInput
}

export type TaskUpdateWithWhereUniqueWithoutCreatorInput = {
  data: TaskUpdateWithoutCreatorInput
  where: TaskWhereUniqueInput
}

export type TaskUpdateWithoutAssigneeInput = {
  comments?: Maybe<CommentUpdateManyWithoutTaskInput>
  creator?: Maybe<UserUpdateOneRequiredWithoutCreatorTasksInput>
  description?: Maybe<NullableStringFieldUpdateOperationsInput>
  title?: Maybe<StringFieldUpdateOperationsInput>
}

export type TaskUpdateWithoutCreatorInput = {
  assignee?: Maybe<UserUpdateOneWithoutAssigneeTasksInput>
  comments?: Maybe<CommentUpdateManyWithoutTaskInput>
  description?: Maybe<NullableStringFieldUpdateOperationsInput>
  title?: Maybe<StringFieldUpdateOperationsInput>
}

export type TaskUpsertWithWhereUniqueWithoutAssigneeInput = {
  create: TaskCreateWithoutAssigneeInput
  update: TaskUpdateWithoutAssigneeInput
  where: TaskWhereUniqueInput
}

export type TaskUpsertWithWhereUniqueWithoutCreatorInput = {
  create: TaskCreateWithoutCreatorInput
  update: TaskUpdateWithoutCreatorInput
  where: TaskWhereUniqueInput
}

export type TaskWhereInput = {
  AND?: Maybe<Array<TaskWhereInput>>
  NOT?: Maybe<Array<TaskWhereInput>>
  OR?: Maybe<Array<TaskWhereInput>>
  assignee?: Maybe<UserRelationFilter>
  assigneeId?: Maybe<IntNullableFilter>
  comments?: Maybe<CommentListRelationFilter>
  creator?: Maybe<UserRelationFilter>
  creatorId?: Maybe<IntFilter>
  description?: Maybe<StringNullableFilter>
  id?: Maybe<IntFilter>
  title?: Maybe<StringFilter>
}

export type TaskWhereUniqueInput = {
  id?: Maybe<Scalars["Int"]>
}

export type User = {
  __typename?: "User"
  assigneeTasks: Array<Task>
  creatorTasks: Array<Task>
  email: Scalars["String"]
  id: Scalars["Int"]
  name: Scalars["String"]
  password: Scalars["String"]
}

export type UserAssigneeTasksArgs = {
  cursor?: Maybe<TaskWhereUniqueInput>
  distinct?: Maybe<Array<TaskScalarFieldEnum>>
  orderBy?: Maybe<Array<TaskOrderByInput>>
  skip?: Maybe<Scalars["Int"]>
  take?: Maybe<Scalars["Int"]>
  where?: Maybe<TaskWhereInput>
}

export type UserCreatorTasksArgs = {
  cursor?: Maybe<TaskWhereUniqueInput>
  distinct?: Maybe<Array<TaskScalarFieldEnum>>
  orderBy?: Maybe<Array<TaskOrderByInput>>
  skip?: Maybe<Scalars["Int"]>
  take?: Maybe<Scalars["Int"]>
  where?: Maybe<TaskWhereInput>
}

export type UserAvgAggregate = {
  __typename?: "UserAvgAggregate"
  id: Scalars["Float"]
}

export type UserCountAggregate = {
  __typename?: "UserCountAggregate"
  _all: Scalars["Int"]
  email?: Maybe<Scalars["Int"]>
  id: Scalars["Int"]
  name?: Maybe<Scalars["Int"]>
  password?: Maybe<Scalars["Int"]>
}

export type UserCreateInput = {
  assigneeTasks?: Maybe<TaskCreateNestedManyWithoutAssigneeInput>
  creatorTasks?: Maybe<TaskCreateNestedManyWithoutCreatorInput>
  email: Scalars["String"]
  name: Scalars["String"]
  password: Scalars["String"]
}

export type UserCreateNestedOneWithoutAssigneeTasksInput = {
  connect?: Maybe<UserWhereUniqueInput>
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutAssigneeTasksInput>
  create?: Maybe<UserCreateWithoutAssigneeTasksInput>
}

export type UserCreateNestedOneWithoutCreatorTasksInput = {
  connect?: Maybe<UserWhereUniqueInput>
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutCreatorTasksInput>
  create?: Maybe<UserCreateWithoutCreatorTasksInput>
}

export type UserCreateOrConnectWithoutAssigneeTasksInput = {
  create: UserCreateWithoutAssigneeTasksInput
  where: UserWhereUniqueInput
}

export type UserCreateOrConnectWithoutCreatorTasksInput = {
  create: UserCreateWithoutCreatorTasksInput
  where: UserWhereUniqueInput
}

export type UserCreateWithoutAssigneeTasksInput = {
  creatorTasks?: Maybe<TaskCreateNestedManyWithoutCreatorInput>
  email: Scalars["String"]
  name: Scalars["String"]
  password: Scalars["String"]
}

export type UserCreateWithoutCreatorTasksInput = {
  assigneeTasks?: Maybe<TaskCreateNestedManyWithoutAssigneeInput>
  email: Scalars["String"]
  name: Scalars["String"]
  password: Scalars["String"]
}

export type UserMaxAggregate = {
  __typename?: "UserMaxAggregate"
  email?: Maybe<Scalars["String"]>
  id: Scalars["Int"]
  name?: Maybe<Scalars["String"]>
  password?: Maybe<Scalars["String"]>
}

export type UserMinAggregate = {
  __typename?: "UserMinAggregate"
  email?: Maybe<Scalars["String"]>
  id: Scalars["Int"]
  name?: Maybe<Scalars["String"]>
  password?: Maybe<Scalars["String"]>
}

export type UserOrderByInput = {
  email?: Maybe<SortOrder>
  id?: Maybe<SortOrder>
  name?: Maybe<SortOrder>
  password?: Maybe<SortOrder>
}

export type UserRelationFilter = {
  is?: Maybe<UserWhereInput>
  isNot?: Maybe<UserWhereInput>
}

export enum UserScalarFieldEnum {
  Email = "email",
  Id = "id",
  Name = "name",
  Password = "password"
}

export type UserSumAggregate = {
  __typename?: "UserSumAggregate"
  id: Scalars["Int"]
}

export type UserUpdateInput = {
  assigneeTasks?: Maybe<TaskUpdateManyWithoutAssigneeInput>
  creatorTasks?: Maybe<TaskUpdateManyWithoutCreatorInput>
  email?: Maybe<StringFieldUpdateOperationsInput>
  name?: Maybe<StringFieldUpdateOperationsInput>
  password?: Maybe<StringFieldUpdateOperationsInput>
}

export type UserUpdateManyMutationInput = {
  email?: Maybe<StringFieldUpdateOperationsInput>
  name?: Maybe<StringFieldUpdateOperationsInput>
  password?: Maybe<StringFieldUpdateOperationsInput>
}

export type UserUpdateOneRequiredWithoutCreatorTasksInput = {
  connect?: Maybe<UserWhereUniqueInput>
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutCreatorTasksInput>
  create?: Maybe<UserCreateWithoutCreatorTasksInput>
  update?: Maybe<UserUpdateWithoutCreatorTasksInput>
  upsert?: Maybe<UserUpsertWithoutCreatorTasksInput>
}

export type UserUpdateOneWithoutAssigneeTasksInput = {
  connect?: Maybe<UserWhereUniqueInput>
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutAssigneeTasksInput>
  create?: Maybe<UserCreateWithoutAssigneeTasksInput>
  delete?: Maybe<Scalars["Boolean"]>
  disconnect?: Maybe<Scalars["Boolean"]>
  update?: Maybe<UserUpdateWithoutAssigneeTasksInput>
  upsert?: Maybe<UserUpsertWithoutAssigneeTasksInput>
}

export type UserUpdateWithoutAssigneeTasksInput = {
  creatorTasks?: Maybe<TaskUpdateManyWithoutCreatorInput>
  email?: Maybe<StringFieldUpdateOperationsInput>
  name?: Maybe<StringFieldUpdateOperationsInput>
  password?: Maybe<StringFieldUpdateOperationsInput>
}

export type UserUpdateWithoutCreatorTasksInput = {
  assigneeTasks?: Maybe<TaskUpdateManyWithoutAssigneeInput>
  email?: Maybe<StringFieldUpdateOperationsInput>
  name?: Maybe<StringFieldUpdateOperationsInput>
  password?: Maybe<StringFieldUpdateOperationsInput>
}

export type UserUpsertWithoutAssigneeTasksInput = {
  create: UserCreateWithoutAssigneeTasksInput
  update: UserUpdateWithoutAssigneeTasksInput
}

export type UserUpsertWithoutCreatorTasksInput = {
  create: UserCreateWithoutCreatorTasksInput
  update: UserUpdateWithoutCreatorTasksInput
}

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>
  NOT?: Maybe<Array<UserWhereInput>>
  OR?: Maybe<Array<UserWhereInput>>
  assigneeTasks?: Maybe<TaskListRelationFilter>
  creatorTasks?: Maybe<TaskListRelationFilter>
  email?: Maybe<StringFilter>
  id?: Maybe<IntFilter>
  name?: Maybe<StringFilter>
  password?: Maybe<StringFilter>
}

export type UserWhereUniqueInput = {
  email?: Maybe<Scalars["String"]>
  id?: Maybe<Scalars["Int"]>
  password?: Maybe<Scalars["String"]>
}

export type GetUsersWithCreatedTasksQueryVariables = Exact<{ [key: string]: never }>

export type GetUsersWithCreatedTasksQuery = { __typename?: "Query" } & {
  users: Array<
    { __typename?: "User" } & Pick<User, "id" | "name" | "email"> & {
        creatorTasks: Array<{ __typename?: "Task" } & Pick<Task, "id" | "title" | "description">>
      }
  >
}

export type CreateTaskMutationVariables = Exact<{
  title: Scalars["String"]
  description?: Maybe<Scalars["String"]>
}>

export type CreateTaskMutation = { __typename?: "Mutation" } & {
  createTask: { __typename?: "Task" } & Pick<Task, "title" | "description">
}

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never }>

export type GetAllUsersQuery = { __typename?: "Query" } & {
  users: Array<{ __typename?: "User" } & Pick<User, "email" | "name" | "id">>
}

export const GetUsersWithCreatedTasksDocument = gql`
  query GetUsersWithCreatedTasks {
    users {
      id
      name
      email
      creatorTasks {
        id
        title
        description
      }
    }
  }
`

export function useGetUsersWithCreatedTasksQuery(
  options: Omit<Urql.UseQueryArgs<GetUsersWithCreatedTasksQueryVariables>, "query"> = {}
) {
  return Urql.useQuery<GetUsersWithCreatedTasksQuery>({ query: GetUsersWithCreatedTasksDocument, ...options })
}
export const CreateTaskDocument = gql`
  mutation CreateTask($title: String!, $description: String) {
    createTask(data: { title: $title, description: $description, creator: { connect: { id: 1 } } }) {
      title
      description
    }
  }
`

export function useCreateTaskMutation() {
  return Urql.useMutation<CreateTaskMutation, CreateTaskMutationVariables>(CreateTaskDocument)
}
export const GetAllUsersDocument = gql`
  query GetAllUsers {
    users {
      email
      name
      id
    }
  }
`

export function useGetAllUsersQuery(options: Omit<Urql.UseQueryArgs<GetAllUsersQueryVariables>, "query"> = {}) {
  return Urql.useQuery<GetAllUsersQuery>({ query: GetAllUsersDocument, ...options })
}
