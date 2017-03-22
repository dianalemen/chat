import { Component, OnInit } from '@angular/core';
import { ChatService } from './shared/chat.service';
import { Chat } from './shared/chat.model'

@Component({
    selector: 'ct-chat',
    templateUrl: './chat.component.html',
    styleUrls: ['./chat.component.css']
})

export class ChatsComponent implements OnInit{
    chats: Promise<Chat[]>;

    constructor (private chatService: ChatService){}
    ngOnInit(){
        this.chats = this.chatService.getAll();
    }
}