import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Chat } from '../shared/chat.model';
import { ChatService } from '../shared/chat.service';


@Component({
  selector: 'ct-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css'],
 
})

export class ChatListComponent implements OnInit {

 @Input() chats: Promise<Chat[]>;

  constructor(
    private router: Router) {

  }

  ngOnInit() {

  }

  select(chat: Chat) {
  

    // Navigate with relative link
    this.router.navigate(['chat', chat.id])
  }

}