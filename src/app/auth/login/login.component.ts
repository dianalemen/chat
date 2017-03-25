import { Component, OnInit } from '@angular/core';
import { User } from './login.interface';
import { AuthService } from '../../core/auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';




@Component({
  selector: 'ct-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  user: User = {
    email: '',
    password: ''
  };

  constructor(private authService: AuthService) {

  }

  ngOnInit() {
    
   
  }

  onSubmit(formData){
    this.authService.login(formData)
    console.log(formData)
  }
  
}