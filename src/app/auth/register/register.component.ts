import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'ct-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})



export  class RegisterComponent implements OnInit{
    user: FormGroup;
    
    constructor( private fb: FormBuilder){
        

    }
    ngOnInit(){
        this.user = this.fb.group({
            name:['', [Validators.required]],
            email: ['', [Validators.required]],
            passwords: this.fb.group({
                password: ['', [Validators.required]],
                confirmPassword: ['', [Validators.required]]
            })
        });
        
    }
    onSubmit(user){
        console.log(user.value, user.valid);
    }
}