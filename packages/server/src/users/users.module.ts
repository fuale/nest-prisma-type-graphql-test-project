import { Module } from "@nestjs/common"
import { UsersResolver } from "./users.resolver"
import { UsersService } from "./users.service"
import { UsersController } from "./users.controller"
import { UserCrudResolver, UserRelationsResolver } from "../prisma/generated/typegraphql"

@Module({
  controllers: [UsersController],
  providers: [UsersService, UsersResolver, UserCrudResolver, UserRelationsResolver],
  exports: [UsersService]
})
export class UsersModule {}
