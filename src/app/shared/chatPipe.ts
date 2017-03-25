import { Pipe, PipeTransform } from '@angular/core';
import { Chat } from '../chats/shared/chat.model'

@Pipe({ name: 'chatPipe'})
export class chatPipe implements PipeTransform{
    transform(chats: Chat[], filterValue: string) {
        return chats?
        chats.filter(chat =>{
            let pattern = new RegExp(filterValue.trim(), 'gi');
            return !!chat.name.match(pattern)
        })
        :chats;
    } 
}