import { Pipe, PipeTransform } from '@angular/core';
import { Chat } from './shared/chat.model';

@Pipe({ name: 'chatPipe'})
export class ChatPipeFilter implements PipeTransform{
     public transform(chats: Chat[], filterValue: string): Chat[] {
    return chats ?
      chats.filter(chat => {
        let pattern = new RegExp(filterValue.trim(), 'i')

        return !!chat.name.match(pattern)
      })
      : chats;
  } 
}