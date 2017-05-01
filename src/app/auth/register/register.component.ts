import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Http, Response, Headers } from '@angular/http';
import { Router } from '@angular/router';

@Component({
    selector: 'ct-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})



export  class RegisterComponent implements OnInit{
    user: FormGroup;

    private signUpUrl = 'http://eleksfrontendcamp-mockapitron.rhcloud.com/signup';
    
    constructor( private fb: FormBuilder,
                 private http: Http,
                 private router: Router){}

    ngOnInit(){
        this.user = this.fb.group({
            username:['', [Validators.required]],
            email: ['', [Validators.required]],
            //passwords: this.fb.group({
                password: ['', [Validators.required]],
                confirmPassword: ['', [Validators.required]]
            //})
        });
        
    }

    onSubmit(user){
        console.log(user.value, user.valid);
    let headers = new Headers({ 'Content-Type': 'application/json' });

       this.http.post(this.signUpUrl, user.value)
             .toPromise()
             .then(this.extractData)
             .catch (error => console.log(error));
    }

    private extractData(res: Response) {
        let body;

    if (res.text()) {
        body = res.json();
    }

    return body || {};
    }
}