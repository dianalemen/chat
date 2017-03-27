import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Http } from '@angular/http';
import { API_CONFIG} from '../shared/api.config';
import { Observable } from 'rxjs';
import { AuthService } from '../core/auth.service';


@Injectable()
export class UserService{
    private _authenticated: boolean = false;
    private _state: BehaviorSubject<any> = new BehaviorSubject<any>({});
    
    public setUserState(state): void{
        this._state.next(state);
}

    public getUserState(): BehaviorSubject<any>{
        return this._state;
}
public get authenticated(): boolean{
    return this._authenticated;
}

constructor (private http: Http,
private auth: AuthService){}

    public login(user): Observable<any>{
       return this.http.post(API_CONFIG.LOGIN, user).map(res => res.json())

    }
    
    public logout(): void{
        this._authenticated = false;
        this._state.next({});
        console.log('user logout');
    }

}