import { Component, OnInit, OnDestroy, AfterViewChecked, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { MessageService } from '../message.service';
import { UserService } from '../../../shared/user.servise';
import { Subscription } from 'rxjs';
import { MessageSocketService } from '../message-soket.service';
import * as io from 'socket.io-client';


@Component({
  selector: 'ct-message-list',
  styleUrls: ['./message-list.component.css'],
  templateUrl: './message-list.component.html'
})



export class MessageListComponent implements OnInit, OnDestroy, AfterViewChecked {
  chatId: number;
  socket;
  messages;
  user: string;

@ViewChild('audio') audio: any;

  private searchValue: string ="";
  private subscription: Subscription;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private messageService: MessageService,
              private socketService: MessageSocketService,
              userService: UserService
              
              ) {this.socket = io.connect('https://safe-everglades-93622.herokuapp.com/')
               //this.socket = io.connect('http://localhost:3000/')
                this.socket.on('connect', () => {
                this.socket.emit('authenticate', { token: localStorage['token'] });
              });
              this.onMessages();
            }

  ngOnInit() {
  this.messageService.getHeroes().subscribe(
                     heroes => {this.messages = heroes,
                     this.user = localStorage.getItem('user')},
                     error =>  console.log(error));
  
  this.subscription = this.messageService
                      .getSearchValue()
                      .subscribe(value => this.searchValue = value) 
  }

  ngAfterViewChecked(){
    this.scrollTop();
  }
  
  scrollTop(){
    let ele = document.getElementsByClassName('chat-content');
    let eleArray = <Element[]>Array.prototype.slice.call(ele);
    eleArray.map( val => {
        val.scrollTop = val.scrollHeight;
    });}
  
 
   ngOnDestroy(){
     this.subscription.unsubscribe();
  }

  private onSearchValueChange(value: string): void{
      this.messageService.setSearchValue(value);
  }
  onMessages(){
   this.socket.on('message', (msg) => {
               (this.messages.push(msg));
               let audio = this.audio.nativeElement;
                          audio.play();
                })
  }
 
 

}
