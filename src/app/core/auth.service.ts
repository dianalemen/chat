import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { API_CONFIG} from '../shared/api.config';
import { Observable } from 'rxjs';

@Injectable()
export class AuthService{
    constructor (private http: Http){}

    public login(user): Observable<any>{
       return this.http.post(API_CONFIG.LOGIN, user).map(res => res.json())

    }
    public isLoggedIn(): boolean{
        return false;
    }

    public logout(): void{
        console.log('user logout');
    }
}