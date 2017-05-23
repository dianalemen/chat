import { Injectable } from '@angular/core';
import { CHATS } from './moc-chats';
import { BehaviorSubject } from 'rxjs';
import { Http, Response } from '@angular/http';

@Injectable()
export class ChatService{

users;

    private usersUrl = 'https://safe-everglades-93622.herokuapp.com/users'; // URL to web API
    //private usersUrl = 'http://localhost:3000/users'; 
    isClassVisible: false;
    
    constructor(
        private http: Http
    ){}

    private search$: BehaviorSubject<string> = new BehaviorSubject('');
    getAll(){
       return this.http.get(this.usersUrl)
                    .map(this.extractData);
    }

    displayLocation(Latitude, Longitude) {
        return this.http
            .get('https://maps.googleapis.com/maps/api/geocode/json?latlng='+
            Latitude+','+
            Longitude+'&sensor=true')
            .map(this.extractData);
    };

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