import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';

import { UserService } from '../../shared/user.servise';


@Component({
    selector: 'ct-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
 
export class NavComponent implements OnInit, OnDestroy{

    isConnected;
    username;
    private subscription: Subscription;
    
    private user = {};
    constructor(private userService: UserService,
    private router: Router,
    ){
        if(this.isLogedIn()){
            userService.getUserState().subscribe( 
                user => this.username = user );
        }
        
    this.isConnected = Observable.merge(
      Observable.of(navigator.onLine),
      Observable.fromEvent(window, 'online').map(() => true),
      Observable.fromEvent(window, 'offline').map(() => false));}

    ngOnInit(){
        
    }
    
    public ngOnDestroy(){
    this.subscription.unsubscribe(); 
  }

    private isLogedIn(){
    return this.userService.authenticated();
}
    onLogOut(){
        this.userService.logout();
        this.router.navigate(['auth/login'])
    }
    
}