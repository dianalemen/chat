import { Injectable } from '@angular/core';
import { CHATS } from './moc-chats';

@Injectable()
export class ChatService{
    getAll(){
        return Promise.resolve(CHATS);
    }
}