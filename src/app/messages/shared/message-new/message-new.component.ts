import { Component, OnInit } from '@angular/core';
import { MessageService } from '../message.service';
import { Message } from '../message.model';
import { MESSAGES } from '../moc-messages';
import * as moment from 'moment';

@Component({
  selector: 'ct-message-new',
  styleUrls: ['./message-new.component.css'],
  templateUrl: './message-new.component.html'
})

export class MessageNewComponent implements OnInit {
socket;

  constructor() {}

  ngOnInit() {}

    greate(inputText, e){
      this.onClick(e);
      console.log(inputText.value);
      let text = inputText.value;
     if(text == ''){
         alert("type your message")
        } else {
          this.joinGroup(text)
            inputText.value = '';
        }
    }
    joinGroup(text){
      this.socket.emit('message', text);
    }
    onClick(e){
      console.log(e);
      e.preventDefault();
    }

  }
