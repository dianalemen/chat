import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Chat } from '../shared/chat.model';
import { ChatService } from '../shared/chat.service';
import { BehaviorSubject, Subscription } from "rxjs/Rx";


@Component({
  selector: 'ct-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css'],
 
})

export class ChatListComponent implements OnInit, OnDestroy {
  isClassVisible: false;

  private searchValue: string ="";
  private subscription: Subscription;

 @Input() chats: Promise<Chat[]>;

  constructor(

    private router: Router,
    private service: ChatService
    
    ) {}

    select(chat: Chat) {
  

    // Navigate with relative link
    this.router.navigate(['chat', 1])
  }

  ngOnInit(){
      
     this.subscription = this.service
      .getSearchValue()
      .subscribe(value => this.searchValue = value);
     }

  public ngOnDestroy(){
    this.subscription.unsubscribe();
  }

  private onSearchValueChange(value: string): void{
      this.service.setSearchValue(value);
  }


}