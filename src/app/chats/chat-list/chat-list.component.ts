import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { Chat } from '../shared/chat.model';
import { ChatService } from '../shared/chat.service';
import { BehaviorSubject, Subscription, Observable } from "rxjs/Rx";
import * as io from 'socket.io-client';

@Component({
  selector: 'ct-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css'],
 
})

export class ChatListComponent implements OnInit, OnDestroy {
  isClassVisible: false;
  chats;
  socket;

  private searchValue: string ="";
  private subscription: Subscription;

  constructor(
    private router: Router,
    private chatService: ChatService
    
    ) {
      this.socket = io.connect('https://safe-everglades-93622.herokuapp.com/')
      //this.socket = io.connect('http:/localhost:3000/')
      this.socket.on('connect', () => {
      this.socket.emit('authenticate', { token: localStorage['token'] });
              })
              this.onJoin();
              this.onLeave()
    }

    select(chat: Chat) {
    // Navigate with relative link
    this.router.navigate(['chat', 1])
  }
 

  ngOnInit(){
     this.getAllUsers();  
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

  getAllUsers(){
    this.chatService.getAll().subscribe(
                     users => {this.chats = users},
                     error =>  console.log(error));
  }
   onJoin(){
    this.socket.on('join', (user) => {
        this.getAllUsers();
    });
  }

   onLeave(){
    this.socket.on('leave', (user) => {
      this.getAllUsers();
    });
  }
}