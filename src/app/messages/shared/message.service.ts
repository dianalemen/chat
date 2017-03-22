import { Injectable } from '@angular/core';
import { MESSAGES } from './moc-messages';

@Injectable()
export class MessageService{
    getAll(chatId){
        const messages = MESSAGES.filter(message => message.chatId === chatId);
        return Promise.resolve(messages);
    }

}