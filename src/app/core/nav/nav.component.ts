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
    constructor(private userService: UserService,
    private router: Router
    ){}

    ngOnInit(){
        this.userService
        .getUserState()
        .subscribe(state => this.username = state.username)
    }
private isLogedIn(): boolean{
    return this.userService.authenticated;
}
    onLoOut(){
        this.userService.logout();
        this.router.navigate(['auth/login'])
    }
    
}