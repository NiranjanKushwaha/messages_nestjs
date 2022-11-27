import { Module } from '@nestjs/common';
import { MessagesController } from './messages.controller';
import { MessagesService } from './messages.sevice';
import { MessagesRepository } from './messaes.repository';
@Module({
  controllers: [MessagesController],
  imports: [],
  providers: [MessagesService, MessagesRepository],
})
export class MessagesModule {}
