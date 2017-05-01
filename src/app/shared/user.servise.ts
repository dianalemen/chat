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
        localStorage.setItem('token', state.token);
        this._state.next(state.user);
    }

    public getUserState(): BehaviorSubject<any>{
       return this._state;
       
        
    }
    public authenticated(): boolean{
        if(localStorage.getItem('token')){
            return true;
        } else {
        return false;
        }
    }

    constructor (private http: Http,
    private auth: AuthService){}

    public login(user): Observable<any>{
       return this.http.post(API_CONFIG.LOGIN, user).map(res => {res.json(); console.log('res',res)})
    
    }
    
    public logout(): void{
        this._authenticated = false;
        this._state.next({});
        console.log('user logout');
    }

}