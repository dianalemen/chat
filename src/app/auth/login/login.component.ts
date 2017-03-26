///<reference path="../../../../node_modules/@types/gapi/index.d.ts"/>
import { Component, OnInit, NgZone } from '@angular/core';
import { User } from './login.interface';
import { AuthService } from '../../core/auth.service'
declare var gapi: any;

@Component({
  selector: 'ct-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  profile;
  username;
  email;


  constructor(private authService: AuthService,
              private zone: NgZone) {

  }

  onSubmit(formData){
      this.authService.login(formData);
  }
    
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

  onSuccess (user): void {
    this.zone.run(() => {
      this.profile = user.getBasicProfile();
      this.username = user.getBasicProfile().getName();
      this.email = user.getBasicProfile().getEmail();
    });
  }
}