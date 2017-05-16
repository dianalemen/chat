import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

import { UserService } from '../../shared/user.servise';


@Component({
    selector: 'ct-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
 
export class NavComponent implements OnInit{

    isConnected;

    private username: BehaviorSubject<any> = new BehaviorSubject('');
    private user = {};
    constructor(private userService: UserService,
    private router: Router,
    ){if(this.isLogedIn()){
             this.username = localStorage["user"]
        }
        
    this.isConnected = Observable.merge(
      Observable.of(navigator.onLine),
      Observable.fromEvent(window, 'online').map(() => true),
      Observable.fromEvent(window, 'offline').map(() => false));}

    ngOnInit(){
      
    }

    private isLogedIn(){
    return this.userService.authenticated();
}
    onLogOut(){
        this.userService.logout();
        this.router.navigate(['auth/login'])
    }
    
}