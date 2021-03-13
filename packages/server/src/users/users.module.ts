import { Module } from "@nestjs/common"
import { UsersService } from "./users.service"
import { UsersController } from "./users.controller"
import { UserCrudResolver, UserRelationsResolver } from "../prisma/generated/typegraphql"

@Module({
  controllers: [UsersController],
  providers: [UsersService, UserCrudResolver, UserRelationsResolver],
  exports: [UsersService]
})
export class UsersModule {}
