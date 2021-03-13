import { Injectable } from "@nestjs/common"
import { PrismaService } from "../prisma/prisma.service"

@Injectable()
export class TasksService {
  constructor(private prismaService: PrismaService) {}

  public async tasks() {
    return this.prismaService.task.findMany({
      include: {
        creator: true
      }
    })
  }
}
