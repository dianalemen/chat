import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { MessageService } from '../message.service';
import { UserService } from '../../../shared/user.servise';
import { Message } from '../message.model';
import { Subscription } from 'rxjs';
import { MessageSocketService } from '../message-soket.service';
import * as io from 'socket.io-client';


@Component({
  selector: 'ct-message-list',
  styleUrls: ['./message-list.component.css'],
  templateUrl: './message-list.component.html'
})

export class MessageListComponent implements OnInit, OnDestroy {
  chatId: number;
  socket;
  messages;

  private searchValue: string ="";
  private subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private messageService: MessageService,
              private socketService: MessageSocketService,
              userService: UserService
              
              ) {this.socket = io.connect('http://eleksfrontendcamp-mockapitron.rhcloud.com:8000')
                   this.socket.on('connect', () => {
               this.socket.emit('authenticate', { token: localStorage['token'] });
              });
              this.onMessages();
            }

  ngOnInit() {
  this.messageService.getHeroes().subscribe(
                     heroes => {this.messages = heroes},
                     error =>  console.log(error));
  
  this.subscription = this.messageService
                      .getSearchValue()
                      .subscribe(value => this.searchValue = value) 
  }
 
   ngOnDestroy(){
     this.subscription.unsubscribe();

  }

  private onSearchValueChange(value: string): void{
      this.messageService.setSearchValue(value);
  }
  onMessages(){
   this.socket.on('message', (msg) => {
               (this.messages.push(msg));
                })
  }
}
