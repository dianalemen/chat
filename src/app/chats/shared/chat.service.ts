import { Injectable } from '@angular/core';
import { CHATS } from './moc-chats';
import { BehaviorSubject } from 'rxjs';
import { Http, Response } from '@angular/http';

@Injectable()
export class ChatService{

users;

private usersUrl = 'http://localhost:3000/users';  // URL to web API

    constructor(
        private http: Http
    ){}

    private search$: BehaviorSubject<string> = new BehaviorSubject('');
    getAll(){
       return this.http.get(this.usersUrl)
                    .map(this.extractData);
    }

    private extractData(res: Response) {
        let body = res.json();
        return body;
    }


    public setSearchValue(value: string): void{
        this.search$.next(value);
    }

    public getSearchValue(): BehaviorSubject<string>{
        return this.search$;
    }
}