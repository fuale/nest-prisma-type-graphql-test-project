import gql from 'graphql-tag';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The javascript `Date` as integer. Type represents date and time as number of milliseconds from start of UNIX epoch. */
  Timestamp: any;
};

export type AffectedRowsOutput = {
  __typename?: 'AffectedRowsOutput';
  count: Scalars['Int'];
};

export type AggregateTask = {
  __typename?: 'AggregateTask';
  avg?: Maybe<TaskAvgAggregate>;
  count?: Maybe<TaskCountAggregate>;
  max?: Maybe<TaskMaxAggregate>;
  min?: Maybe<TaskMinAggregate>;
  sum?: Maybe<TaskSumAggregate>;
};

export type AggregateUser = {
  __typename?: 'AggregateUser';
  avg?: Maybe<UserAvgAggregate>;
  count?: Maybe<UserCountAggregate>;
  max?: Maybe<UserMaxAggregate>;
  min?: Maybe<UserMinAggregate>;
  sum?: Maybe<UserSumAggregate>;
};

export type Comment = {
  __typename?: 'Comment';
  content: Scalars['String'];
  createdAt: Scalars['Timestamp'];
  deletedAt?: Maybe<Scalars['Timestamp']>;
  id: Scalars['Int'];
  taskId?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['Timestamp'];
};

export type CommentCreateNestedManyWithoutTaskInput = {
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CommentCreateOrConnectWithoutTaskInput>>;
  create?: Maybe<Array<CommentCreateWithoutTaskInput>>;
};

export type CommentCreateOrConnectWithoutTaskInput = {
  create: CommentCreateWithoutTaskInput;
  where: CommentWhereUniqueInput;
};

export type CommentCreateWithoutTaskInput = {
  content: Scalars['String'];
  createdAt?: Maybe<Scalars['Timestamp']>;
  deletedAt?: Maybe<Scalars['Timestamp']>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type CommentListRelationFilter = {
  every?: Maybe<CommentWhereInput>;
  none?: Maybe<CommentWhereInput>;
  some?: Maybe<CommentWhereInput>;
};

export type CommentOrderByInput = {
  content?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  deletedAt?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  task?: Maybe<TaskOrderByInput>;
  taskId?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export enum CommentScalarFieldEnum {
  Content = 'content',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Id = 'id',
  TaskId = 'taskId',
  UpdatedAt = 'updatedAt'
}

export type CommentScalarWhereInput = {
  AND?: Maybe<Array<CommentScalarWhereInput>>;
  NOT?: Maybe<Array<CommentScalarWhereInput>>;
  OR?: Maybe<Array<CommentScalarWhereInput>>;
  content?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  deletedAt?: Maybe<DateTimeNullableFilter>;
  id?: Maybe<IntFilter>;
  taskId?: Maybe<IntNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type CommentUpdateManyMutationInput = {
  content?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpdateManyWithWhereWithoutTaskInput = {
  data: CommentUpdateManyMutationInput;
  where: CommentScalarWhereInput;
};

export type CommentUpdateManyWithoutTaskInput = {
  connect?: Maybe<Array<CommentWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<CommentCreateOrConnectWithoutTaskInput>>;
  create?: Maybe<Array<CommentCreateWithoutTaskInput>>;
  delete?: Maybe<Array<CommentWhereUniqueInput>>;
  deleteMany?: Maybe<Array<CommentScalarWhereInput>>;
  disconnect?: Maybe<Array<CommentWhereUniqueInput>>;
  set?: Maybe<Array<CommentWhereUniqueInput>>;
  update?: Maybe<Array<CommentUpdateWithWhereUniqueWithoutTaskInput>>;
  updateMany?: Maybe<Array<CommentUpdateManyWithWhereWithoutTaskInput>>;
  upsert?: Maybe<Array<CommentUpsertWithWhereUniqueWithoutTaskInput>>;
};

export type CommentUpdateWithWhereUniqueWithoutTaskInput = {
  data: CommentUpdateWithoutTaskInput;
  where: CommentWhereUniqueInput;
};

export type CommentUpdateWithoutTaskInput = {
  content?: Maybe<StringFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type CommentUpsertWithWhereUniqueWithoutTaskInput = {
  create: CommentCreateWithoutTaskInput;
  update: CommentUpdateWithoutTaskInput;
  where: CommentWhereUniqueInput;
};

export type CommentWhereInput = {
  AND?: Maybe<Array<CommentWhereInput>>;
  NOT?: Maybe<Array<CommentWhereInput>>;
  OR?: Maybe<Array<CommentWhereInput>>;
  content?: Maybe<StringFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  deletedAt?: Maybe<DateTimeNullableFilter>;
  id?: Maybe<IntFilter>;
  task?: Maybe<TaskRelationFilter>;
  taskId?: Maybe<IntNullableFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type CommentWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type DateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Timestamp']>;
};

export type DateTimeFilter = {
  equals?: Maybe<Scalars['Timestamp']>;
  gt?: Maybe<Scalars['Timestamp']>;
  gte?: Maybe<Scalars['Timestamp']>;
  in?: Maybe<Array<Scalars['Timestamp']>>;
  lt?: Maybe<Scalars['Timestamp']>;
  lte?: Maybe<Scalars['Timestamp']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Scalars['Timestamp']>>;
};

export type DateTimeNullableFilter = {
  equals?: Maybe<Scalars['Timestamp']>;
  gt?: Maybe<Scalars['Timestamp']>;
  gte?: Maybe<Scalars['Timestamp']>;
  in?: Maybe<Array<Scalars['Timestamp']>>;
  lt?: Maybe<Scalars['Timestamp']>;
  lte?: Maybe<Scalars['Timestamp']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
  notIn?: Maybe<Array<Scalars['Timestamp']>>;
};

export type EnumSexFieldUpdateOperationsInput = {
  set?: Maybe<Sex>;
};

export type EnumSexFilter = {
  equals?: Maybe<Sex>;
  in?: Maybe<Array<Sex>>;
  not?: Maybe<NestedEnumSexFilter>;
  notIn?: Maybe<Array<Sex>>;
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type IntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type IntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type Mutation = {
  __typename?: 'Mutation';
  changePassword: UserResponse;
  createTask: Task;
  createUser: User;
  deleteManyTask: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteTask?: Maybe<Task>;
  deleteUser?: Maybe<User>;
  login: UserResponse;
  logout: Scalars['Boolean'];
  register: UserResponse;
  updateManyTask: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateTask?: Maybe<Task>;
  updateUser?: Maybe<User>;
  upsertTask: Task;
  upsertUser: User;
};


export type MutationChangePasswordArgs = {
  newPassword: Scalars['String'];
  token: Scalars['String'];
};


export type MutationCreateTaskArgs = {
  data: TaskCreateInput;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationDeleteManyTaskArgs = {
  where?: Maybe<TaskWhereInput>;
};


export type MutationDeleteManyUserArgs = {
  where?: Maybe<UserWhereInput>;
};


export type MutationDeleteTaskArgs = {
  where: TaskWhereUniqueInput;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationLoginArgs = {
  password: Scalars['String'];
  usernameOrEmail: Scalars['String'];
};


export type MutationRegisterArgs = {
  options: RegisterInput;
};


export type MutationUpdateManyTaskArgs = {
  data: TaskUpdateManyMutationInput;
  where?: Maybe<TaskWhereInput>;
};


export type MutationUpdateManyUserArgs = {
  data: UserUpdateManyMutationInput;
  where?: Maybe<UserWhereInput>;
};


export type MutationUpdateTaskArgs = {
  data: TaskUpdateInput;
  where: TaskWhereUniqueInput;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpsertTaskArgs = {
  create: TaskCreateInput;
  update: TaskUpdateInput;
  where: TaskWhereUniqueInput;
};


export type MutationUpsertUserArgs = {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type NestedDateTimeFilter = {
  equals?: Maybe<Scalars['Timestamp']>;
  gt?: Maybe<Scalars['Timestamp']>;
  gte?: Maybe<Scalars['Timestamp']>;
  in?: Maybe<Array<Scalars['Timestamp']>>;
  lt?: Maybe<Scalars['Timestamp']>;
  lte?: Maybe<Scalars['Timestamp']>;
  not?: Maybe<NestedDateTimeFilter>;
  notIn?: Maybe<Array<Scalars['Timestamp']>>;
};

export type NestedDateTimeNullableFilter = {
  equals?: Maybe<Scalars['Timestamp']>;
  gt?: Maybe<Scalars['Timestamp']>;
  gte?: Maybe<Scalars['Timestamp']>;
  in?: Maybe<Array<Scalars['Timestamp']>>;
  lt?: Maybe<Scalars['Timestamp']>;
  lte?: Maybe<Scalars['Timestamp']>;
  not?: Maybe<NestedDateTimeNullableFilter>;
  notIn?: Maybe<Array<Scalars['Timestamp']>>;
};

export type NestedEnumSexFilter = {
  equals?: Maybe<Sex>;
  in?: Maybe<Array<Sex>>;
  not?: Maybe<NestedEnumSexFilter>;
  notIn?: Maybe<Array<Sex>>;
};

export type NestedIntFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedIntNullableFilter = {
  equals?: Maybe<Scalars['Int']>;
  gt?: Maybe<Scalars['Int']>;
  gte?: Maybe<Scalars['Int']>;
  in?: Maybe<Array<Scalars['Int']>>;
  lt?: Maybe<Scalars['Int']>;
  lte?: Maybe<Scalars['Int']>;
  not?: Maybe<NestedIntNullableFilter>;
  notIn?: Maybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type NullableDateTimeFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['Timestamp']>;
};

export type NullableStringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type Project = {
  __typename?: 'Project';
  id: Scalars['Int'];
  key: Scalars['String'];
};

export type ProjectCreateNestedOneWithoutTaskInput = {
  connect?: Maybe<ProjectWhereUniqueInput>;
  connectOrCreate?: Maybe<ProjectCreateOrConnectWithoutTaskInput>;
  create?: Maybe<ProjectCreateWithoutTaskInput>;
};

export type ProjectCreateOrConnectWithoutTaskInput = {
  create: ProjectCreateWithoutTaskInput;
  where: ProjectWhereUniqueInput;
};

export type ProjectCreateWithoutTaskInput = {
  key: Scalars['String'];
};

export type ProjectOrderByInput = {
  id?: Maybe<SortOrder>;
  key?: Maybe<SortOrder>;
};

export type ProjectRelationFilter = {
  is?: Maybe<ProjectWhereInput>;
  isNot?: Maybe<ProjectWhereInput>;
};

export type ProjectUpdateOneRequiredWithoutTaskInput = {
  connect?: Maybe<ProjectWhereUniqueInput>;
  connectOrCreate?: Maybe<ProjectCreateOrConnectWithoutTaskInput>;
  create?: Maybe<ProjectCreateWithoutTaskInput>;
  update?: Maybe<ProjectUpdateWithoutTaskInput>;
  upsert?: Maybe<ProjectUpsertWithoutTaskInput>;
};

export type ProjectUpdateWithoutTaskInput = {
  key?: Maybe<StringFieldUpdateOperationsInput>;
};

export type ProjectUpsertWithoutTaskInput = {
  create: ProjectCreateWithoutTaskInput;
  update: ProjectUpdateWithoutTaskInput;
};

export type ProjectWhereInput = {
  AND?: Maybe<Array<ProjectWhereInput>>;
  NOT?: Maybe<Array<ProjectWhereInput>>;
  OR?: Maybe<Array<ProjectWhereInput>>;
  id?: Maybe<IntFilter>;
  key?: Maybe<StringFilter>;
  task?: Maybe<TaskListRelationFilter>;
};

export type ProjectWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};

export type Query = {
  __typename?: 'Query';
  aggregateTask: AggregateTask;
  aggregateUser: AggregateUser;
  findFirstTask?: Maybe<Task>;
  findFirstUser?: Maybe<User>;
  me?: Maybe<User>;
  task?: Maybe<Task>;
  tasks: Array<Task>;
  user?: Maybe<User>;
  users: Array<User>;
};


export type QueryAggregateTaskArgs = {
  cursor?: Maybe<TaskWhereUniqueInput>;
  orderBy?: Maybe<Array<TaskOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TaskWhereInput>;
};


export type QueryAggregateUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryFindFirstTaskArgs = {
  cursor?: Maybe<TaskWhereUniqueInput>;
  distinct?: Maybe<Array<TaskScalarFieldEnum>>;
  orderBy?: Maybe<Array<TaskOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TaskWhereInput>;
};


export type QueryFindFirstUserArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<Array<UserScalarFieldEnum>>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};


export type QueryTaskArgs = {
  where: TaskWhereUniqueInput;
};


export type QueryTasksArgs = {
  cursor?: Maybe<TaskWhereUniqueInput>;
  distinct?: Maybe<Array<TaskScalarFieldEnum>>;
  orderBy?: Maybe<Array<TaskOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TaskWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: Maybe<UserWhereUniqueInput>;
  distinct?: Maybe<Array<UserScalarFieldEnum>>;
  orderBy?: Maybe<Array<UserOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<UserWhereInput>;
};

export type RegisterInput = {
  email?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  username?: Maybe<Scalars['String']>;
};

export enum Sex {
  Female = 'FEMALE',
  Male = 'MALE',
  Unknown = 'UNKNOWN'
}

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type Status = {
  __typename?: 'Status';
  alias: Scalars['String'];
  id: Scalars['String'];
  title: Scalars['String'];
};

export type StatusCreateNestedOneWithoutTaskInput = {
  connect?: Maybe<StatusWhereUniqueInput>;
  connectOrCreate?: Maybe<StatusCreateOrConnectWithoutTaskInput>;
  create?: Maybe<StatusCreateWithoutTaskInput>;
};

export type StatusCreateOrConnectWithoutTaskInput = {
  create: StatusCreateWithoutTaskInput;
  where: StatusWhereUniqueInput;
};

export type StatusCreateWithoutTaskInput = {
  alias: Scalars['String'];
  id?: Maybe<Scalars['String']>;
  title: Scalars['String'];
};

export type StatusOrderByInput = {
  alias?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
};

export type StatusRelationFilter = {
  is?: Maybe<StatusWhereInput>;
  isNot?: Maybe<StatusWhereInput>;
};

export type StatusUpdateOneWithoutTaskInput = {
  connect?: Maybe<StatusWhereUniqueInput>;
  connectOrCreate?: Maybe<StatusCreateOrConnectWithoutTaskInput>;
  create?: Maybe<StatusCreateWithoutTaskInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<StatusUpdateWithoutTaskInput>;
  upsert?: Maybe<StatusUpsertWithoutTaskInput>;
};

export type StatusUpdateWithoutTaskInput = {
  alias?: Maybe<StringFieldUpdateOperationsInput>;
  id?: Maybe<StringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
};

export type StatusUpsertWithoutTaskInput = {
  create: StatusCreateWithoutTaskInput;
  update: StatusUpdateWithoutTaskInput;
};

export type StatusWhereInput = {
  AND?: Maybe<Array<StatusWhereInput>>;
  NOT?: Maybe<Array<StatusWhereInput>>;
  OR?: Maybe<Array<StatusWhereInput>>;
  alias?: Maybe<StringFilter>;
  id?: Maybe<StringFilter>;
  task?: Maybe<TaskListRelationFilter>;
  title?: Maybe<StringFilter>;
};

export type StatusWhereUniqueInput = {
  id?: Maybe<Scalars['String']>;
};

export type StringFieldUpdateOperationsInput = {
  set?: Maybe<Scalars['String']>;
};

export type StringFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: Maybe<Scalars['String']>;
  endsWith?: Maybe<Scalars['String']>;
  equals?: Maybe<Scalars['String']>;
  gt?: Maybe<Scalars['String']>;
  gte?: Maybe<Scalars['String']>;
  in?: Maybe<Array<Scalars['String']>>;
  lt?: Maybe<Scalars['String']>;
  lte?: Maybe<Scalars['String']>;
  not?: Maybe<NestedStringNullableFilter>;
  notIn?: Maybe<Array<Scalars['String']>>;
  startsWith?: Maybe<Scalars['String']>;
};

export type Task = {
  __typename?: 'Task';
  assignee?: Maybe<User>;
  assigneeId?: Maybe<Scalars['Int']>;
  comments: Array<Comment>;
  createdAt: Scalars['Timestamp'];
  creator: User;
  creatorId: Scalars['Int'];
  deletedAt?: Maybe<Scalars['Timestamp']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  parentTask?: Maybe<Task>;
  parentTaskId?: Maybe<Scalars['Int']>;
  project: Project;
  projectId: Scalars['Int'];
  status?: Maybe<Status>;
  statusId?: Maybe<Scalars['String']>;
  subTasks: Array<Task>;
  title: Scalars['String'];
  updatedAt: Scalars['Timestamp'];
};


export type TaskCommentsArgs = {
  cursor?: Maybe<CommentWhereUniqueInput>;
  distinct?: Maybe<Array<CommentScalarFieldEnum>>;
  orderBy?: Maybe<Array<CommentOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<CommentWhereInput>;
};


export type TaskSubTasksArgs = {
  cursor?: Maybe<TaskWhereUniqueInput>;
  distinct?: Maybe<Array<TaskScalarFieldEnum>>;
  orderBy?: Maybe<Array<TaskOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TaskWhereInput>;
};

export type TaskAvgAggregate = {
  __typename?: 'TaskAvgAggregate';
  assigneeId?: Maybe<Scalars['Float']>;
  creatorId: Scalars['Float'];
  id: Scalars['Float'];
  parentTaskId?: Maybe<Scalars['Float']>;
  projectId: Scalars['Float'];
};

export type TaskCountAggregate = {
  __typename?: 'TaskCountAggregate';
  _all: Scalars['Int'];
  assigneeId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  creatorId: Scalars['Int'];
  deletedAt?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  parentTaskId?: Maybe<Scalars['Int']>;
  projectId: Scalars['Int'];
  statusId?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
};

export type TaskCreateInput = {
  assignee?: Maybe<UserCreateNestedOneWithoutAssigneeTasksInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutTaskInput>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  creator: UserCreateNestedOneWithoutCreatorTasksInput;
  deletedAt?: Maybe<Scalars['Timestamp']>;
  description?: Maybe<Scalars['String']>;
  parentTask?: Maybe<TaskCreateNestedOneWithoutSubTasksInput>;
  project: ProjectCreateNestedOneWithoutTaskInput;
  status?: Maybe<StatusCreateNestedOneWithoutTaskInput>;
  subTasks?: Maybe<TaskCreateNestedManyWithoutParentTaskInput>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type TaskCreateNestedManyWithoutAssigneeInput = {
  connect?: Maybe<Array<TaskWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TaskCreateOrConnectWithoutAssigneeInput>>;
  create?: Maybe<Array<TaskCreateWithoutAssigneeInput>>;
};

export type TaskCreateNestedManyWithoutCreatorInput = {
  connect?: Maybe<Array<TaskWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TaskCreateOrConnectWithoutCreatorInput>>;
  create?: Maybe<Array<TaskCreateWithoutCreatorInput>>;
};

export type TaskCreateNestedManyWithoutParentTaskInput = {
  connect?: Maybe<Array<TaskWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TaskCreateOrConnectWithoutParentTaskInput>>;
  create?: Maybe<Array<TaskCreateWithoutParentTaskInput>>;
};

export type TaskCreateNestedOneWithoutSubTasksInput = {
  connect?: Maybe<TaskWhereUniqueInput>;
  connectOrCreate?: Maybe<TaskCreateOrConnectWithoutSubTasksInput>;
  create?: Maybe<TaskCreateWithoutSubTasksInput>;
};

export type TaskCreateOrConnectWithoutAssigneeInput = {
  create: TaskCreateWithoutAssigneeInput;
  where: TaskWhereUniqueInput;
};

export type TaskCreateOrConnectWithoutCreatorInput = {
  create: TaskCreateWithoutCreatorInput;
  where: TaskWhereUniqueInput;
};

export type TaskCreateOrConnectWithoutParentTaskInput = {
  create: TaskCreateWithoutParentTaskInput;
  where: TaskWhereUniqueInput;
};

export type TaskCreateOrConnectWithoutSubTasksInput = {
  create: TaskCreateWithoutSubTasksInput;
  where: TaskWhereUniqueInput;
};

export type TaskCreateWithoutAssigneeInput = {
  comments?: Maybe<CommentCreateNestedManyWithoutTaskInput>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  creator: UserCreateNestedOneWithoutCreatorTasksInput;
  deletedAt?: Maybe<Scalars['Timestamp']>;
  description?: Maybe<Scalars['String']>;
  parentTask?: Maybe<TaskCreateNestedOneWithoutSubTasksInput>;
  project: ProjectCreateNestedOneWithoutTaskInput;
  status?: Maybe<StatusCreateNestedOneWithoutTaskInput>;
  subTasks?: Maybe<TaskCreateNestedManyWithoutParentTaskInput>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type TaskCreateWithoutCreatorInput = {
  assignee?: Maybe<UserCreateNestedOneWithoutAssigneeTasksInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutTaskInput>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  deletedAt?: Maybe<Scalars['Timestamp']>;
  description?: Maybe<Scalars['String']>;
  parentTask?: Maybe<TaskCreateNestedOneWithoutSubTasksInput>;
  project: ProjectCreateNestedOneWithoutTaskInput;
  status?: Maybe<StatusCreateNestedOneWithoutTaskInput>;
  subTasks?: Maybe<TaskCreateNestedManyWithoutParentTaskInput>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type TaskCreateWithoutParentTaskInput = {
  assignee?: Maybe<UserCreateNestedOneWithoutAssigneeTasksInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutTaskInput>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  creator: UserCreateNestedOneWithoutCreatorTasksInput;
  deletedAt?: Maybe<Scalars['Timestamp']>;
  description?: Maybe<Scalars['String']>;
  project: ProjectCreateNestedOneWithoutTaskInput;
  status?: Maybe<StatusCreateNestedOneWithoutTaskInput>;
  subTasks?: Maybe<TaskCreateNestedManyWithoutParentTaskInput>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type TaskCreateWithoutSubTasksInput = {
  assignee?: Maybe<UserCreateNestedOneWithoutAssigneeTasksInput>;
  comments?: Maybe<CommentCreateNestedManyWithoutTaskInput>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  creator: UserCreateNestedOneWithoutCreatorTasksInput;
  deletedAt?: Maybe<Scalars['Timestamp']>;
  description?: Maybe<Scalars['String']>;
  parentTask?: Maybe<TaskCreateNestedOneWithoutSubTasksInput>;
  project: ProjectCreateNestedOneWithoutTaskInput;
  status?: Maybe<StatusCreateNestedOneWithoutTaskInput>;
  title: Scalars['String'];
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type TaskListRelationFilter = {
  every?: Maybe<TaskWhereInput>;
  none?: Maybe<TaskWhereInput>;
  some?: Maybe<TaskWhereInput>;
};

export type TaskMaxAggregate = {
  __typename?: 'TaskMaxAggregate';
  assigneeId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  creatorId: Scalars['Int'];
  deletedAt?: Maybe<Scalars['Timestamp']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  parentTaskId?: Maybe<Scalars['Int']>;
  projectId: Scalars['Int'];
  statusId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type TaskMinAggregate = {
  __typename?: 'TaskMinAggregate';
  assigneeId?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  creatorId: Scalars['Int'];
  deletedAt?: Maybe<Scalars['Timestamp']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  parentTaskId?: Maybe<Scalars['Int']>;
  projectId: Scalars['Int'];
  statusId?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
};

export type TaskOrderByInput = {
  assignee?: Maybe<UserOrderByInput>;
  assigneeId?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  creator?: Maybe<UserOrderByInput>;
  creatorId?: Maybe<SortOrder>;
  deletedAt?: Maybe<SortOrder>;
  description?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  parentTask?: Maybe<TaskOrderByInput>;
  parentTaskId?: Maybe<SortOrder>;
  project?: Maybe<ProjectOrderByInput>;
  projectId?: Maybe<SortOrder>;
  status?: Maybe<StatusOrderByInput>;
  statusId?: Maybe<SortOrder>;
  title?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
};

export type TaskRelationFilter = {
  is?: Maybe<TaskWhereInput>;
  isNot?: Maybe<TaskWhereInput>;
};

export enum TaskScalarFieldEnum {
  AssigneeId = 'assigneeId',
  CreatedAt = 'createdAt',
  CreatorId = 'creatorId',
  DeletedAt = 'deletedAt',
  Description = 'description',
  Id = 'id',
  ParentTaskId = 'parentTaskId',
  ProjectId = 'projectId',
  StatusId = 'statusId',
  Title = 'title',
  UpdatedAt = 'updatedAt'
}

export type TaskScalarWhereInput = {
  AND?: Maybe<Array<TaskScalarWhereInput>>;
  NOT?: Maybe<Array<TaskScalarWhereInput>>;
  OR?: Maybe<Array<TaskScalarWhereInput>>;
  assigneeId?: Maybe<IntNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  creatorId?: Maybe<IntFilter>;
  deletedAt?: Maybe<DateTimeNullableFilter>;
  description?: Maybe<StringNullableFilter>;
  id?: Maybe<IntFilter>;
  parentTaskId?: Maybe<IntNullableFilter>;
  projectId?: Maybe<IntFilter>;
  statusId?: Maybe<StringNullableFilter>;
  title?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type TaskSumAggregate = {
  __typename?: 'TaskSumAggregate';
  assigneeId?: Maybe<Scalars['Int']>;
  creatorId: Scalars['Int'];
  id: Scalars['Int'];
  parentTaskId?: Maybe<Scalars['Int']>;
  projectId: Scalars['Int'];
};

export type TaskUpdateInput = {
  assignee?: Maybe<UserUpdateOneWithoutAssigneeTasksInput>;
  comments?: Maybe<CommentUpdateManyWithoutTaskInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  creator?: Maybe<UserUpdateOneRequiredWithoutCreatorTasksInput>;
  deletedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  parentTask?: Maybe<TaskUpdateOneWithoutSubTasksInput>;
  project?: Maybe<ProjectUpdateOneRequiredWithoutTaskInput>;
  status?: Maybe<StatusUpdateOneWithoutTaskInput>;
  subTasks?: Maybe<TaskUpdateManyWithoutParentTaskInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TaskUpdateManyMutationInput = {
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TaskUpdateManyWithWhereWithoutAssigneeInput = {
  data: TaskUpdateManyMutationInput;
  where: TaskScalarWhereInput;
};

export type TaskUpdateManyWithWhereWithoutCreatorInput = {
  data: TaskUpdateManyMutationInput;
  where: TaskScalarWhereInput;
};

export type TaskUpdateManyWithWhereWithoutParentTaskInput = {
  data: TaskUpdateManyMutationInput;
  where: TaskScalarWhereInput;
};

export type TaskUpdateManyWithoutAssigneeInput = {
  connect?: Maybe<Array<TaskWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TaskCreateOrConnectWithoutAssigneeInput>>;
  create?: Maybe<Array<TaskCreateWithoutAssigneeInput>>;
  delete?: Maybe<Array<TaskWhereUniqueInput>>;
  deleteMany?: Maybe<Array<TaskScalarWhereInput>>;
  disconnect?: Maybe<Array<TaskWhereUniqueInput>>;
  set?: Maybe<Array<TaskWhereUniqueInput>>;
  update?: Maybe<Array<TaskUpdateWithWhereUniqueWithoutAssigneeInput>>;
  updateMany?: Maybe<Array<TaskUpdateManyWithWhereWithoutAssigneeInput>>;
  upsert?: Maybe<Array<TaskUpsertWithWhereUniqueWithoutAssigneeInput>>;
};

export type TaskUpdateManyWithoutCreatorInput = {
  connect?: Maybe<Array<TaskWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TaskCreateOrConnectWithoutCreatorInput>>;
  create?: Maybe<Array<TaskCreateWithoutCreatorInput>>;
  delete?: Maybe<Array<TaskWhereUniqueInput>>;
  deleteMany?: Maybe<Array<TaskScalarWhereInput>>;
  disconnect?: Maybe<Array<TaskWhereUniqueInput>>;
  set?: Maybe<Array<TaskWhereUniqueInput>>;
  update?: Maybe<Array<TaskUpdateWithWhereUniqueWithoutCreatorInput>>;
  updateMany?: Maybe<Array<TaskUpdateManyWithWhereWithoutCreatorInput>>;
  upsert?: Maybe<Array<TaskUpsertWithWhereUniqueWithoutCreatorInput>>;
};

export type TaskUpdateManyWithoutParentTaskInput = {
  connect?: Maybe<Array<TaskWhereUniqueInput>>;
  connectOrCreate?: Maybe<Array<TaskCreateOrConnectWithoutParentTaskInput>>;
  create?: Maybe<Array<TaskCreateWithoutParentTaskInput>>;
  delete?: Maybe<Array<TaskWhereUniqueInput>>;
  deleteMany?: Maybe<Array<TaskScalarWhereInput>>;
  disconnect?: Maybe<Array<TaskWhereUniqueInput>>;
  set?: Maybe<Array<TaskWhereUniqueInput>>;
  update?: Maybe<Array<TaskUpdateWithWhereUniqueWithoutParentTaskInput>>;
  updateMany?: Maybe<Array<TaskUpdateManyWithWhereWithoutParentTaskInput>>;
  upsert?: Maybe<Array<TaskUpsertWithWhereUniqueWithoutParentTaskInput>>;
};

export type TaskUpdateOneWithoutSubTasksInput = {
  connect?: Maybe<TaskWhereUniqueInput>;
  connectOrCreate?: Maybe<TaskCreateOrConnectWithoutSubTasksInput>;
  create?: Maybe<TaskCreateWithoutSubTasksInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<TaskUpdateWithoutSubTasksInput>;
  upsert?: Maybe<TaskUpsertWithoutSubTasksInput>;
};

export type TaskUpdateWithWhereUniqueWithoutAssigneeInput = {
  data: TaskUpdateWithoutAssigneeInput;
  where: TaskWhereUniqueInput;
};

export type TaskUpdateWithWhereUniqueWithoutCreatorInput = {
  data: TaskUpdateWithoutCreatorInput;
  where: TaskWhereUniqueInput;
};

export type TaskUpdateWithWhereUniqueWithoutParentTaskInput = {
  data: TaskUpdateWithoutParentTaskInput;
  where: TaskWhereUniqueInput;
};

export type TaskUpdateWithoutAssigneeInput = {
  comments?: Maybe<CommentUpdateManyWithoutTaskInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  creator?: Maybe<UserUpdateOneRequiredWithoutCreatorTasksInput>;
  deletedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  parentTask?: Maybe<TaskUpdateOneWithoutSubTasksInput>;
  project?: Maybe<ProjectUpdateOneRequiredWithoutTaskInput>;
  status?: Maybe<StatusUpdateOneWithoutTaskInput>;
  subTasks?: Maybe<TaskUpdateManyWithoutParentTaskInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TaskUpdateWithoutCreatorInput = {
  assignee?: Maybe<UserUpdateOneWithoutAssigneeTasksInput>;
  comments?: Maybe<CommentUpdateManyWithoutTaskInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  parentTask?: Maybe<TaskUpdateOneWithoutSubTasksInput>;
  project?: Maybe<ProjectUpdateOneRequiredWithoutTaskInput>;
  status?: Maybe<StatusUpdateOneWithoutTaskInput>;
  subTasks?: Maybe<TaskUpdateManyWithoutParentTaskInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TaskUpdateWithoutParentTaskInput = {
  assignee?: Maybe<UserUpdateOneWithoutAssigneeTasksInput>;
  comments?: Maybe<CommentUpdateManyWithoutTaskInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  creator?: Maybe<UserUpdateOneRequiredWithoutCreatorTasksInput>;
  deletedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  project?: Maybe<ProjectUpdateOneRequiredWithoutTaskInput>;
  status?: Maybe<StatusUpdateOneWithoutTaskInput>;
  subTasks?: Maybe<TaskUpdateManyWithoutParentTaskInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TaskUpdateWithoutSubTasksInput = {
  assignee?: Maybe<UserUpdateOneWithoutAssigneeTasksInput>;
  comments?: Maybe<CommentUpdateManyWithoutTaskInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  creator?: Maybe<UserUpdateOneRequiredWithoutCreatorTasksInput>;
  deletedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  description?: Maybe<NullableStringFieldUpdateOperationsInput>;
  parentTask?: Maybe<TaskUpdateOneWithoutSubTasksInput>;
  project?: Maybe<ProjectUpdateOneRequiredWithoutTaskInput>;
  status?: Maybe<StatusUpdateOneWithoutTaskInput>;
  title?: Maybe<StringFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
};

export type TaskUpsertWithWhereUniqueWithoutAssigneeInput = {
  create: TaskCreateWithoutAssigneeInput;
  update: TaskUpdateWithoutAssigneeInput;
  where: TaskWhereUniqueInput;
};

export type TaskUpsertWithWhereUniqueWithoutCreatorInput = {
  create: TaskCreateWithoutCreatorInput;
  update: TaskUpdateWithoutCreatorInput;
  where: TaskWhereUniqueInput;
};

export type TaskUpsertWithWhereUniqueWithoutParentTaskInput = {
  create: TaskCreateWithoutParentTaskInput;
  update: TaskUpdateWithoutParentTaskInput;
  where: TaskWhereUniqueInput;
};

export type TaskUpsertWithoutSubTasksInput = {
  create: TaskCreateWithoutSubTasksInput;
  update: TaskUpdateWithoutSubTasksInput;
};

export type TaskWhereInput = {
  AND?: Maybe<Array<TaskWhereInput>>;
  NOT?: Maybe<Array<TaskWhereInput>>;
  OR?: Maybe<Array<TaskWhereInput>>;
  assignee?: Maybe<UserRelationFilter>;
  assigneeId?: Maybe<IntNullableFilter>;
  comments?: Maybe<CommentListRelationFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  creator?: Maybe<UserRelationFilter>;
  creatorId?: Maybe<IntFilter>;
  deletedAt?: Maybe<DateTimeNullableFilter>;
  description?: Maybe<StringNullableFilter>;
  id?: Maybe<IntFilter>;
  parentTask?: Maybe<TaskRelationFilter>;
  parentTaskId?: Maybe<IntNullableFilter>;
  project?: Maybe<ProjectRelationFilter>;
  projectId?: Maybe<IntFilter>;
  status?: Maybe<StatusRelationFilter>;
  statusId?: Maybe<StringNullableFilter>;
  subTasks?: Maybe<TaskListRelationFilter>;
  title?: Maybe<StringFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
};

export type TaskWhereUniqueInput = {
  id?: Maybe<Scalars['Int']>;
};


export type User = {
  __typename?: 'User';
  assigneeTasks: Array<Task>;
  birthDate?: Maybe<Scalars['Timestamp']>;
  createdAt: Scalars['Timestamp'];
  creatorTasks: Array<Task>;
  deletedAt?: Maybe<Scalars['Timestamp']>;
  email: Scalars['String'];
  firstname: Scalars['String'];
  id: Scalars['Int'];
  lastname: Scalars['String'];
  password: Scalars['String'];
  sex: Sex;
  updatedAt: Scalars['Timestamp'];
  username: Scalars['String'];
};


export type UserAssigneeTasksArgs = {
  cursor?: Maybe<TaskWhereUniqueInput>;
  distinct?: Maybe<Array<TaskScalarFieldEnum>>;
  orderBy?: Maybe<Array<TaskOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TaskWhereInput>;
};


export type UserCreatorTasksArgs = {
  cursor?: Maybe<TaskWhereUniqueInput>;
  distinct?: Maybe<Array<TaskScalarFieldEnum>>;
  orderBy?: Maybe<Array<TaskOrderByInput>>;
  skip?: Maybe<Scalars['Int']>;
  take?: Maybe<Scalars['Int']>;
  where?: Maybe<TaskWhereInput>;
};

export type UserAvgAggregate = {
  __typename?: 'UserAvgAggregate';
  id: Scalars['Float'];
};

export type UserCountAggregate = {
  __typename?: 'UserCountAggregate';
  _all: Scalars['Int'];
  birthDate?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Int']>;
  deletedAt?: Maybe<Scalars['Int']>;
  email?: Maybe<Scalars['Int']>;
  firstname?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  lastname?: Maybe<Scalars['Int']>;
  password?: Maybe<Scalars['Int']>;
  sex?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['Int']>;
  username?: Maybe<Scalars['Int']>;
};

export type UserCreateInput = {
  assigneeTasks?: Maybe<TaskCreateNestedManyWithoutAssigneeInput>;
  birthDate?: Maybe<Scalars['Timestamp']>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  creatorTasks?: Maybe<TaskCreateNestedManyWithoutCreatorInput>;
  deletedAt?: Maybe<Scalars['Timestamp']>;
  email: Scalars['String'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  password: Scalars['String'];
  sex?: Maybe<Sex>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  username: Scalars['String'];
};

export type UserCreateNestedOneWithoutAssigneeTasksInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutAssigneeTasksInput>;
  create?: Maybe<UserCreateWithoutAssigneeTasksInput>;
};

export type UserCreateNestedOneWithoutCreatorTasksInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutCreatorTasksInput>;
  create?: Maybe<UserCreateWithoutCreatorTasksInput>;
};

export type UserCreateOrConnectWithoutAssigneeTasksInput = {
  create: UserCreateWithoutAssigneeTasksInput;
  where: UserWhereUniqueInput;
};

export type UserCreateOrConnectWithoutCreatorTasksInput = {
  create: UserCreateWithoutCreatorTasksInput;
  where: UserWhereUniqueInput;
};

export type UserCreateWithoutAssigneeTasksInput = {
  birthDate?: Maybe<Scalars['Timestamp']>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  creatorTasks?: Maybe<TaskCreateNestedManyWithoutCreatorInput>;
  deletedAt?: Maybe<Scalars['Timestamp']>;
  email: Scalars['String'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  password: Scalars['String'];
  sex?: Maybe<Sex>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  username: Scalars['String'];
};

export type UserCreateWithoutCreatorTasksInput = {
  assigneeTasks?: Maybe<TaskCreateNestedManyWithoutAssigneeInput>;
  birthDate?: Maybe<Scalars['Timestamp']>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  deletedAt?: Maybe<Scalars['Timestamp']>;
  email: Scalars['String'];
  firstname: Scalars['String'];
  lastname: Scalars['String'];
  password: Scalars['String'];
  sex?: Maybe<Sex>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  username: Scalars['String'];
};

export type UserMaxAggregate = {
  __typename?: 'UserMaxAggregate';
  birthDate?: Maybe<Scalars['Timestamp']>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  deletedAt?: Maybe<Scalars['Timestamp']>;
  email?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  lastname?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  sex?: Maybe<Sex>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  username?: Maybe<Scalars['String']>;
};

export type UserMinAggregate = {
  __typename?: 'UserMinAggregate';
  birthDate?: Maybe<Scalars['Timestamp']>;
  createdAt?: Maybe<Scalars['Timestamp']>;
  deletedAt?: Maybe<Scalars['Timestamp']>;
  email?: Maybe<Scalars['String']>;
  firstname?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  lastname?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  sex?: Maybe<Sex>;
  updatedAt?: Maybe<Scalars['Timestamp']>;
  username?: Maybe<Scalars['String']>;
};

export type UserOrderByInput = {
  birthDate?: Maybe<SortOrder>;
  createdAt?: Maybe<SortOrder>;
  deletedAt?: Maybe<SortOrder>;
  email?: Maybe<SortOrder>;
  firstname?: Maybe<SortOrder>;
  id?: Maybe<SortOrder>;
  lastname?: Maybe<SortOrder>;
  password?: Maybe<SortOrder>;
  sex?: Maybe<SortOrder>;
  updatedAt?: Maybe<SortOrder>;
  username?: Maybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: Maybe<UserWhereInput>;
  isNot?: Maybe<UserWhereInput>;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  errors?: Maybe<Array<FieldError>>;
  user?: Maybe<User>;
};

export enum UserScalarFieldEnum {
  BirthDate = 'birthDate',
  CreatedAt = 'createdAt',
  DeletedAt = 'deletedAt',
  Email = 'email',
  Firstname = 'firstname',
  Id = 'id',
  Lastname = 'lastname',
  Password = 'password',
  Sex = 'sex',
  UpdatedAt = 'updatedAt',
  Username = 'username'
}

export type UserSumAggregate = {
  __typename?: 'UserSumAggregate';
  id: Scalars['Int'];
};

export type UserUpdateInput = {
  assigneeTasks?: Maybe<TaskUpdateManyWithoutAssigneeInput>;
  birthDate?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  creatorTasks?: Maybe<TaskUpdateManyWithoutCreatorInput>;
  deletedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  firstname?: Maybe<StringFieldUpdateOperationsInput>;
  lastname?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  sex?: Maybe<EnumSexFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  username?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateManyMutationInput = {
  birthDate?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  firstname?: Maybe<StringFieldUpdateOperationsInput>;
  lastname?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  sex?: Maybe<EnumSexFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  username?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateOneRequiredWithoutCreatorTasksInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutCreatorTasksInput>;
  create?: Maybe<UserCreateWithoutCreatorTasksInput>;
  update?: Maybe<UserUpdateWithoutCreatorTasksInput>;
  upsert?: Maybe<UserUpsertWithoutCreatorTasksInput>;
};

export type UserUpdateOneWithoutAssigneeTasksInput = {
  connect?: Maybe<UserWhereUniqueInput>;
  connectOrCreate?: Maybe<UserCreateOrConnectWithoutAssigneeTasksInput>;
  create?: Maybe<UserCreateWithoutAssigneeTasksInput>;
  delete?: Maybe<Scalars['Boolean']>;
  disconnect?: Maybe<Scalars['Boolean']>;
  update?: Maybe<UserUpdateWithoutAssigneeTasksInput>;
  upsert?: Maybe<UserUpsertWithoutAssigneeTasksInput>;
};

export type UserUpdateWithoutAssigneeTasksInput = {
  birthDate?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  creatorTasks?: Maybe<TaskUpdateManyWithoutCreatorInput>;
  deletedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  firstname?: Maybe<StringFieldUpdateOperationsInput>;
  lastname?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  sex?: Maybe<EnumSexFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  username?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserUpdateWithoutCreatorTasksInput = {
  assigneeTasks?: Maybe<TaskUpdateManyWithoutAssigneeInput>;
  birthDate?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  createdAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  deletedAt?: Maybe<NullableDateTimeFieldUpdateOperationsInput>;
  email?: Maybe<StringFieldUpdateOperationsInput>;
  firstname?: Maybe<StringFieldUpdateOperationsInput>;
  lastname?: Maybe<StringFieldUpdateOperationsInput>;
  password?: Maybe<StringFieldUpdateOperationsInput>;
  sex?: Maybe<EnumSexFieldUpdateOperationsInput>;
  updatedAt?: Maybe<DateTimeFieldUpdateOperationsInput>;
  username?: Maybe<StringFieldUpdateOperationsInput>;
};

export type UserUpsertWithoutAssigneeTasksInput = {
  create: UserCreateWithoutAssigneeTasksInput;
  update: UserUpdateWithoutAssigneeTasksInput;
};

export type UserUpsertWithoutCreatorTasksInput = {
  create: UserCreateWithoutCreatorTasksInput;
  update: UserUpdateWithoutCreatorTasksInput;
};

export type UserWhereInput = {
  AND?: Maybe<Array<UserWhereInput>>;
  NOT?: Maybe<Array<UserWhereInput>>;
  OR?: Maybe<Array<UserWhereInput>>;
  assigneeTasks?: Maybe<TaskListRelationFilter>;
  birthDate?: Maybe<DateTimeNullableFilter>;
  createdAt?: Maybe<DateTimeFilter>;
  creatorTasks?: Maybe<TaskListRelationFilter>;
  deletedAt?: Maybe<DateTimeNullableFilter>;
  email?: Maybe<StringFilter>;
  firstname?: Maybe<StringFilter>;
  id?: Maybe<IntFilter>;
  lastname?: Maybe<StringFilter>;
  password?: Maybe<StringFilter>;
  sex?: Maybe<EnumSexFilter>;
  updatedAt?: Maybe<DateTimeFilter>;
  username?: Maybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  email?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['Int']>;
  password?: Maybe<Scalars['String']>;
};

export type TaskQueryVariables = Exact<{
  id: Scalars['Int'];
}>;


export type TaskQuery = (
  { __typename?: 'Query' }
  & { task?: Maybe<(
    { __typename?: 'Task' }
    & Pick<Task, 'id' | 'title' | 'description'>
    & { subTasks: Array<(
      { __typename?: 'Task' }
      & Pick<Task, 'id' | 'title'>
    )>, comments: Array<(
      { __typename?: 'Comment' }
      & Pick<Comment, 'id' | 'content'>
    )> }
  )> }
);

export type GetUsersWithCreatedTasksQueryVariables = Exact<{ [key: string]: never; }>;


export type GetUsersWithCreatedTasksQuery = (
  { __typename?: 'Query' }
  & { users: Array<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username' | 'lastname' | 'firstname' | 'email'>
    & { creatorTasks: Array<(
      { __typename?: 'Task' }
      & Pick<Task, 'id' | 'title' | 'description'>
    )> }
  )> }
);

export type CreateTaskMutationVariables = Exact<{
  title: Scalars['String'];
  description?: Maybe<Scalars['String']>;
}>;


export type CreateTaskMutation = (
  { __typename?: 'Mutation' }
  & { createTask: (
    { __typename?: 'Task' }
    & Pick<Task, 'title' | 'description'>
  ) }
);

export type GetAllUsersQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllUsersQuery = (
  { __typename?: 'Query' }
  & { users: Array<(
    { __typename?: 'User' }
    & Pick<User, 'email' | 'username' | 'firstname' | 'lastname' | 'id'>
  )> }
);

export type LoginMutationVariables = Exact<{
  password: Scalars['String'];
  usernameOrEmail: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'UserResponse' }
    & { user?: Maybe<(
      { __typename?: 'User' }
      & Pick<User, 'username' | 'firstname' | 'lastname'>
    )>, errors?: Maybe<Array<(
      { __typename?: 'FieldError' }
      & Pick<FieldError, 'message' | 'field'>
    )>> }
  ) }
);

export type GetMeQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMeQuery = (
  { __typename?: 'Query' }
  & { me?: Maybe<(
    { __typename?: 'User' }
    & Pick<User, 'id' | 'username'>
  )> }
);


export const TaskDocument = gql`
    query Task($id: Int!) {
  task(where: {id: $id}) {
    id
    title
    description
    subTasks {
      id
      title
    }
    comments {
      id
      content
    }
  }
}
    `;

export function useTaskQuery(options: Omit<Urql.UseQueryArgs<TaskQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<TaskQuery>({ query: TaskDocument, ...options });
};
export const GetUsersWithCreatedTasksDocument = gql`
    query GetUsersWithCreatedTasks {
  users {
    id
    username
    lastname
    firstname
    email
    creatorTasks {
      id
      title
      description
    }
  }
}
    `;

export function useGetUsersWithCreatedTasksQuery(options: Omit<Urql.UseQueryArgs<GetUsersWithCreatedTasksQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetUsersWithCreatedTasksQuery>({ query: GetUsersWithCreatedTasksDocument, ...options });
};
export const CreateTaskDocument = gql`
    mutation CreateTask($title: String!, $description: String) {
  createTask(
    data: {title: $title, description: $description, project: {connect: {id: 1}}, creator: {connect: {id: 1}}}
  ) {
    title
    description
  }
}
    `;

export function useCreateTaskMutation() {
  return Urql.useMutation<CreateTaskMutation, CreateTaskMutationVariables>(CreateTaskDocument);
};
export const GetAllUsersDocument = gql`
    query GetAllUsers {
  users {
    email
    username
    firstname
    lastname
    id
  }
}
    `;

export function useGetAllUsersQuery(options: Omit<Urql.UseQueryArgs<GetAllUsersQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetAllUsersQuery>({ query: GetAllUsersDocument, ...options });
};
export const LoginDocument = gql`
    mutation Login($password: String!, $usernameOrEmail: String!) {
  login(password: $password, usernameOrEmail: $usernameOrEmail) {
    user {
      username
      firstname
      lastname
    }
    errors {
      message
      field
    }
  }
}
    `;

export function useLoginMutation() {
  return Urql.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument);
};
export const GetMeDocument = gql`
    query GetMe {
  me {
    id
    username
  }
}
    `;

export function useGetMeQuery(options: Omit<Urql.UseQueryArgs<GetMeQueryVariables>, 'query'> = {}) {
  return Urql.useQuery<GetMeQuery>({ query: GetMeDocument, ...options });
};