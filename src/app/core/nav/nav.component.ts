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
    ){
        if(this.isLogedIn()){
             this.username = localStorage.getItem('user');
        }}

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