import { Injectable } from '@angular/core';

@Injectable()
export class AuthService{

    get isLoggedIn(){
        return localStorage.getItem('token')
    }

    login(user){
        if(user){
            localStorage.setItem('token', 'youlogged')
            console.log('ffffffffffffffff');
        }

    }

    register(user){
//todo
    }

    logOut(){
        localStorage.setItem('token', null)
    }

}