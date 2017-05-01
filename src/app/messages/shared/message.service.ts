import { Injectable } from '@angular/core';
import { MESSAGES } from './moc-messages';
import { BehaviorSubject } from 'rxjs';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class MessageService{

heroes;

private heroesUrl = 'http://eleksfrontendcamp-mockapitron.rhcloud.com/messages';  // URL to web API

    constructor(
        private http: Http
    ){}

   private search$: BehaviorSubject<string> = new BehaviorSubject('');

    getHeroes() {
    return this.http.get(this.heroesUrl)
                    .map(this.extractData);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body.slice(body.length-4);
    }

   // getAll(chatId){
      //const messages = MESSAGES.filter(message => message.chatId === chatId);
         // return Promise.resolve(messages);
    //}

    public setSearchValue(value: string): void{
        this.search$.next(value);
    }

    public getSearchValue(): BehaviorSubject<string>{
        return this.search$;
    }
    

}