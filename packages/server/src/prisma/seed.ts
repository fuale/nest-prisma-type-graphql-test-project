import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient()

async function main() {
  const project = await prisma.project.upsert({
    update: {},
    where: { id: 1 },
    create: {
      key: "WEB"
    }
  })

  const farid = await prisma.user.upsert({
    update: {},
    where: { email: "farid@gmail.com" },
    create: {
      email: "farid@gmail.com",
      username: "akhmedov.fy",
      lastname: "Ахмедов",
      firstname: "Фарид",
      password: "$argon2i$v=19$m=4096,t=3,p=1$NiO8p8+djF9wzIesqQsEOg$hG+tztXL3rJlq27ODjblWyM4jC5GV2CtNxGcwGa2YKA" // admin
    }
  })

  const in_work = await prisma.status.upsert({
    update: {},
    where: { id: "in_work_status" },
    create: {
      id: "in_work_status",
      title: "В работе",
      alias: "in_work"
    }
  })

  const danil = await prisma.user.upsert({
    where: { email: "danil42russia@gmail.com" },
    update: {},
    create: {
      email: `danil42russia@gmail.com`,
      username: "danil42russia",
      lastname: "Ахмедов",
      firstname: "Фарид",
      password: "qwe"
    }
  })

  const task1 = await prisma.task.upsert({
    update: {},
    where: { id: 1 },
    create: {
      project: { connect: { id: project.id } },
      creator: { connect: { id: farid.id } },
      assignee: { connect: { id: danil.id } },
      title: "Настроить маки",
      status: { connect: { id: in_work.id } }
    }
  })

  const comment = await prisma.comment.upsert({
    update: {},
    where: { id: 1 },
    create: {
      task: { connect: { id: task1.id } },
      content: "Какой-то комментарий"
    }
  })

  const task2 = await prisma.task.upsert({
    update: {},
    where: { id: 2 },
    create: {
      project: { connect: { id: project.id } },
      creator: { connect: { id: danil.id } },
      assignee: { connect: { id: farid.id } },
      comments: { connect: { id: comment.id } },
      title: "Пофиксить сууз",
      status: { connect: { id: in_work.id } }
    }
  })

  const subtask2 = await prisma.task.upsert({
    update: {},
    where: { id: 3 },
    create: {
      project: { connect: { id: project.id } },
      creator: { connect: { id: farid.id } },
      assignee: { connect: { id: danil.id } },
      parentTask: { connect: { id: task2.id } },
      title: "Написать утилиту",
      status: { connect: { id: in_work.id } }
    }
  })
}

main()
  .catch(e => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
