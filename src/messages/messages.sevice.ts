// import { MessagesRepository } from './messaes.repository';

// export class MessagesService {
//   messagesRepo: MessagesRepository;
//   constructor() {
//     this.messagesRepo = new MessagesRepository();
//   }

//   findOne(id: string) {
//     return this.messagesRepo.findOne(id);
//   }
//   findAll() {
//     return this.messagesRepo.findAll();
//   }

//   create(content: string) {
//     return this.messagesRepo.create(content);
//   }
// }

import { MessagesRepository } from './messaes.repository';

export class MessagesService {
  messagesRepo: MessagesRepository;

  constructor() {
    // Service is creating its own dependencies
    // DONT DO THIS ON REAL APPS
    this.messagesRepo = new MessagesRepository();
  }

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
