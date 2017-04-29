import { Message } from './message.model';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import * as moment from 'moment'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';

/*
@Injectable()
export class HeroService {
  private heroesUrl = 'http://eleksfrontendcamp-mockapitron.rhcloud.com/messages';  // URL to web API

  constructor (private http: Http) {}
  getHeroes(): Observable<Message[]> {
    return this.http.get(this.heroesUrl)
                    .map(this.extractData)
                    .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }
  private handleError (error: Response | any) {
    // In a real world app, you might use a remote logging infrastructure
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}*/


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