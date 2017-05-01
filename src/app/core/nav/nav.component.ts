import { Component, OnInit } from '@angular/core';
import { UserService } from '../../shared/user.servise';
import { Router } from '@angular/router';


@Component({
    selector: 'ct-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})

export class NavComponent implements OnInit{
    private username: string ="";
    private user = {};
    constructor(private userService: UserService,
    private router: Router
    ){}

    ngOnInit(){
        if(this.isLogedIn()){
        this.userService
        .getUserState()
        .subscribe(state => {this.username = state.username; console.log('state', state)});
        }
    }
    private isLogedIn(){
        console.log('isloggedin', this.userService.authenticated());
    return this.userService.authenticated();
}
    onLoOut(){
        this.userService.logout();
        this.router.navigate(['auth/login'])
    }
    
}