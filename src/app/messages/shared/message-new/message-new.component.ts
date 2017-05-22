import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { MessageSocketService } from '../message-soket.service';
import * as moment from 'moment';

@Component({
  selector: 'ct-message-new',
  styleUrls: ['./message-new.component.css'],
  templateUrl: './message-new.component.html'
})

export class MessageNewComponent implements OnInit {
socket;

private isTyping: boolean = false;
typingUsers = [];

  constructor(
    private socketService: MessageSocketService
  ) {}

  ngOnInit() {
this.socketService.typing()
      .subscribe(user => {
        this.typingUsers.push(user)
        console.log('typing',this.typingUsers)
      })

    this.socketService.notTyping()
      .subscribe(user => {
        let i = this.typingUsers.indexOf(user);
        this.typingUsers.splice(i, 1);
        console.log('nottyping',this.typingUsers)
      })

  }

    greate(inputText, e){
      this.onClick(e);
      let text;
          text = inputText.text;
          this.joinGroup(text);
          this.socketService.stopTyping();
          this.isTyping = false;
    }

    joinGroup(text){
      this.socketService.joinGroup(text);
    }

    onClick(e){
      e.preventDefault();
    }

    onChange(event) {
    if (event.target.value.length > 0 && !this.isTyping) {
      console.log('etvl', event.target.value.length)
      this.socketService.isTyping()
      this.isTyping = true;
    }
    else if (event.target.value.length === 0 && this.isTyping) {
      console.log('etvl1', event.target.value.length)
      this.socketService.stopTyping()
      this.isTyping = false;
    }
  }

  }
