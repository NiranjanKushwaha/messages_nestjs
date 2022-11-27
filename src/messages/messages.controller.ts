// import { Controller, Get, Post, Body, Param } from '@nestjs/common';
// import { CreateMessageDTO } from './dtos/create-message.dto';
// import { MessagesService } from './messages.sevice';

// @Controller('messages')
// export class MessagesController {
//   messagesService: MessagesService;
//   constructor() {
//     // we will remove and use dependency Injection
//     this.messagesService = new MessagesService();
//   }

//   @Get()
//   listMessages() {
//     // although we are returning to server on get call but we will not use return keyword
//     return this.messagesService.findAll();
//     // return 'Hello';
//   }

//   @Post()
//   createMessage(@Body() body: CreateMessageDTO) {
//     console.log(body);
//     // since our method is accepting only one param
//     return this.messagesService.create(body.content);
//   }

//   //   if i will not pass id like this:@Param('id') and try to access param than it will give object of all params.
//   @Get('/:id')
//   getMessage(@Param('id') id: string) {
//     console.log('id passed is: ', id);
//     return this.messagesService.findOne(id);
//   }
// }

import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateMessageDTO } from './dtos/create-message.dto';
import { MessagesService } from './messages.sevice';

@Controller('messages')
export class MessagesController {
  messagesService: MessagesService;

  constructor() {
    // DONT DO THIS ON REAL APP
    // USE DEPENDENCY INJECTION
    this.messagesService = new MessagesService();
  }

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
  getMessage(@Param('id') id: string) {
    return this.messagesService.findOne(id);
  }
}
