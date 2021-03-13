import { NestFactory } from "@nestjs/core"
import { Transport } from "@nestjs/microservices"
import * as session from "express-session"
import { AppModule } from "./app/app.module"

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  app.connectMicroservice({
    transport: Transport.REDIS,
    options: {
      url: "redis://localhost:6379"
    }
  })
  app.use(
    session({
      secret: "my-secret",
      resave: false,
      saveUninitialized: false
    })
  )
  app.enableCors({
    origin: "http://localhost:3000",
    credentials: true,
    allowedHeaders: ["Content-Type"]
  })
  await app.listen(4000)
}

bootstrap()
