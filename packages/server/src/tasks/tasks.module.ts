import { Module } from "@nestjs/common"
import { TasksService } from "./tasks.service"
import { TasksController } from "./tasks.controller"
import { TaskCrudResolver, TaskRelationsResolver } from "../prisma/generated/typegraphql"

@Module({
  providers: [TasksService, TaskCrudResolver, TaskRelationsResolver],
  controllers: [TasksController]
})
export class TasksModule {}
