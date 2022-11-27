import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './messaes.repository';

@Injectable()
export class MessagesService {
  //   messagesRepo: MessagesRepository;

  //   constructor() {
  //     // Service is creating its own dependencies
  //     // DONT DO THIS ON REAL APPS
  //     this.messagesRepo = new MessagesRepository();
  //   }

  constructor(public messagesRepo: MessagesRepository) {}

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }

  findAll() {
    return this.messagesRepo.findAll();
  }

  create(content: string) {
    return this.messagesRepo.create(content);
  }
}
