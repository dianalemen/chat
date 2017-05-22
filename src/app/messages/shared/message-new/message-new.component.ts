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
showMsg: boolean = false;

  constructor(
    private socketService: MessageSocketService
  ) {}

  ngOnInit() {
this.socketService.typing()
      .subscribe(user => {
        this.typingUsers.push(user)
        console.log(this.typingUsers)
      })

    this.socketService.notTyping()
      .subscribe(user => {
        let i = this.typingUsers.indexOf(user);
        this.typingUsers.splice(i, 1);
        console.log(this.typingUsers)
      })

      this.typingUsers.length > 0 ? this.showMsg = true : this.showMsg = false

  }

    greate(inputText, e){
      this.onClick(e);
      let text;
     if(inputText.text == ''){
         alert("type your message")
        } else {
          text = inputText.text;
          this.joinGroup(text);
        }
    }
    joinGroup(text){
      this.socketService.joinGroup(text);
    }
    onClick(e){
      console.log(e);
      e.preventDefault();
    }

    onChange(event) {
    if (event.target.value.length > 0 && !this.isTyping) {
      this.socketService.isTyping()
      this.isTyping = true;
    }
    else if (event.target.value.length === 0 && this.isTyping) {
      this.socketService.stopTyping()
      this.isTyping = false;
    }
  }

  }
