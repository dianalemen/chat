import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Chat } from '../shared/chat.model';
import { ChatService } from '../shared/chat.service';
import { BehaviorSubject, Subscription, Observable } from "rxjs/Rx";

@Component({
  selector: 'ct-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css'],
 
})

export class ChatListComponent implements OnInit, OnDestroy {
  isClassVisible: false;
  status;
  chats;

  private searchValue: string ="";
  private subscription: Subscription;

  constructor(
    private router: Router,
    private chatService: ChatService
    
    ) {}

    select(chat: Chat) {
    // Navigate with relative link
    this.router.navigate(['chat', 1])
  }
 

  ngOnInit(){
  this.chatService.getAll().subscribe(
                     users => {this.chats = users},
                     error =>  console.log(error));

      
     this.subscription = this.chatService
      .getSearchValue()
      .subscribe(value => this.searchValue = value);
     }

  public ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  private onSearchValueChange(value: string): void{
      this.chatService.setSearchValue(value);
  }


}