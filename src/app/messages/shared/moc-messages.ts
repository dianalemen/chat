import { Message } from './message.model';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import * as moment from 'moment'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

export const MESSAGES: Message[] = [
  {
    id: 1,
    senderId: 1,
    isRead: true,
    sentAt: moment().subtract(45, 'minutes').toDate(),
    text: 'Hello!',
    chatId: 1
  },
  {
    id: 2,
    senderId: 1,
    isRead: true,
    sentAt: moment().subtract(20, 'minutes').toDate(),
    text: 'How are you?',
    chatId: 1
  },
  {
    id: 3,
    senderId: 2,
    isRead: true,
    sentAt: moment().subtract(30, 'minutes').toDate(),
    text: 'Hi man!',
    chatId: 1
  },
  {
    id: 4,
    senderId: 2,
    isRead: true,
    sentAt: moment().subtract(15, 'minutes').toDate(),
    text: `I\'m fine, thanks!`,
    chatId: 1
  },
  {
    id: 5,
    senderId: 3,
    isRead: true,
    sentAt: moment().subtract(5, 'minutes').toDate(),
    text: `I\'ll wait you near street at 5 o\'clock`,
    chatId: 2
  },
  {
    id: 6,
    senderId: 4,
    isRead: true,
    sentAt: moment().subtract(3, 'minutes').toDate(),
    text: `Ok, I will be here in 20 minutes!`,
    chatId: 2
  }
]; 