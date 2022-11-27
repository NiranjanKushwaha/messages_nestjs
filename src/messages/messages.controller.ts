import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  NotFoundException,
} from '@nestjs/common';
import { CreateMessageDTO } from './dtos/create-message.dto';
import { MessagesService } from './messages.sevice';

@Controller('messages')
export class MessagesController {
  // ================> old way to get instance of a class without dependency Injection
  // messagesService: MessagesService;
  // constructor() {
  //   this.messagesService = new MessagesService();
  // }

  // =================> with depedency Injection
  constructor(public messagesService: MessagesService) {}
  @Get()
  listMessages() {
    return this.messagesService.findAll();
    // return 'Hello';
  }

  @Post()
  createMessage(@Body() body: CreateMessageDTO) {
    return this.messagesService.create(body.content);
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.messagesService.findOne(id);
    if (!message) {
      throw new NotFoundException('message not found');
    }
    return message;
  }
}
