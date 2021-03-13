import { Module } from "@nestjs/common"
import { RedisModule } from "nestjs-redis"
import { TypeGraphQLModule } from "typegraphql-nestjs/dist/typegraphql.module"
import { PrismaService } from "../prisma/prisma.service"
import { UsersModule } from "../users/users.module"
import { PrismaModule } from "../prisma/prisma.module"
import { TasksModule } from "../tasks/tasks.module"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"

@Module({
  imports: [
    UsersModule,
    PrismaModule,
    TasksModule,
    RedisModule.register({
      url: "redis://localhost:6379"
    }),
    TypeGraphQLModule.forRootAsync({
      inject: [PrismaService],
      useFactory(prismaService: PrismaService) {
        return {
          emitSchemaFile: true,
          validate: false,
          debug: true,
          playground: true,
          cors: {
            origin: true,
            credentials: true
          },
          dateScalarMode: "timestamp",
          context: x => ({ ...x, prisma: prismaService })
        }
      }
    })
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
