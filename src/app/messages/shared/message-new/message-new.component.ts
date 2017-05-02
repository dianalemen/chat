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

  constructor(
    private socketService: MessageSocketService
  ) {}

  ngOnInit() {}

    greate(inputText, e){
      this.onClick(e);
      let text;
     if(text == ''){
         alert("type your message")
        } else {
          text = inputText.value.text;
          this.joinGroup(text);
          inputText.value.text = '';
        }
    }
    joinGroup(text){
      this.socketService.joinGroup(text);
    }
    onClick(e){
      console.log(e);
      e.preventDefault();
    }

  }
