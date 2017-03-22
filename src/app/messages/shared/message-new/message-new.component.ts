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


  constructor() {}

  ngOnInit() {}

    greate(inputText){
      let text = inputText.value;
     if(text == ''){
         alert("type your message")
        } else {
        
        MESSAGES.push({
          id: 6,
          senderId: 4,
          isRead: true,
          sentAt: moment().subtract(3, 'minutes').toDate(),
          text: text,
          chatId: 2
        });
        const messages = MESSAGES;
        console.log(messages);
        inputText.value = '';
        
        }
    };
  }
