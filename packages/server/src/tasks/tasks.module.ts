import { Module } from "@nestjs/common"
import { TasksService } from "./tasks.service"
import { TasksController } from "./tasks.controller"
import { TaskCrudResolver } from "../prisma/generated/typegraphql"

@Module({
  providers: [TasksService, TaskCrudResolver],
  controllers: [TasksController]
})
export class TasksModule {}
