///<reference path="../../../../node_modules/@types/gapi/index.d.ts"/>
import { Component, OnInit, NgZone, OnDestroy } from '@angular/core';
import { User } from './login.interface';
import { Router } from '@angular/router'
import { AuthService } from '../../core/auth.service';
import { Subscription } from 'rxjs';
import { UserService } from '../../shared/user.servise';
declare var gapi: any;

@Component({
  selector: 'ct-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit, OnDestroy {
  profile;
  username;
  email;

private subscription: Subscription[] =[];
  constructor(private authService: AuthService,
              private zone: NgZone,
              private router: Router,
              private userService: UserService
              ) {

  }
/* @param for
form.email
form.password
 */
  private onSubmit(formData){
    //console.log(formData);

    const data = {
      username: formData.username,
      password: formData.password
    }; 
    this.authService
    .login(data)
    .subscribe(this.onLoginSuccess.bind(this), this.onLoginError.bind(this))
      };

  
    
  ngOnInit() {
    gapi.load('auth2', () => {
      var auth2 = gapi.auth2.init({
        client_id: '718730295293-06f2hsflisqiteoio1s248phhiontsos.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin'
      });

      auth2.attachClickHandler(
        document.getElementById('google-login-btn'), {},
        this.onSuccess.bind(this),
        this.onFailure
      );
    });
  }

  onFailure (){}

  ngOnDestroy(){
    this.subscription.map(subscription => subscription.unsubscribe())
  }

  onSuccess (user): void {
    this.zone.run(() => {
      this.profile = user.getBasicProfile();
      this.username = user.getBasicProfile().getName();
      this.email = user.getBasicProfile().getEmail();
    });
  }


  private onLoginSuccess(res: any): void{
    //token(res)
    console.log(res);
    this.userService.setUserState(res);
    console.log(res);
    this.router.navigate(['chat'])
  }

  private onLoginError(err: any): void{
    console.error(err);
    alert("User not found!")
  }


}