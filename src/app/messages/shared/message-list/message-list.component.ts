import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { MessageService } from '../message.service';
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

  private searchValue: string ="";
  private subscription: Subscription;

  messages: Promise <Message[]>;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private messageService: MessageService,
            
              ) {}

  ngOnInit() {
  this.route.params.subscribe((params: Params) =>{
  this.chatId = +params['id'];
  return(this.messages = this.messageService.getAll(this.chatId));
});
  
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
  this.socket = io.connect('ws://front-camp-chat.herokuapp.com/socket.io/');
    this.socket.on('connect', () => {
    console.log('connected')
  });

  this.socket.on('message', (msg) => {
    console.log('message', msg);
  })
}

joinGroup(){
    this.socket.emit('message', 'jkfdlkfjsdkljf');
}
}
