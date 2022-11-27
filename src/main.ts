import { NestFactory } from '@nestjs/core';
import { MessagesModule } from './messages/messages.module';
import { ValidationPipe } from '@nestjs/common';
async function bootstrap() {
  const app = await NestFactory.create(MessagesModule);
  // to validate incoming data like body in post we use pipe and below code is enabling pipe throughout the application
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3001);
}
bootstrap();
