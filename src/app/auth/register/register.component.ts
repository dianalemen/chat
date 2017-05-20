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

    //private signUpUrl = 'https://safe-everglades-93622.herokuapp.com/registration';
    private signUpUrl = 'http://localhost:3000/registration';
    
    constructor( private fb: FormBuilder,
                 private http: Http,
                 private router: Router){}

    ngOnInit(){
        this.user = this.fb.group({
            username:['', [Validators.required]],
            password: ['', [Validators.required]],
            //passwords: this.fb.group({
                email: ['', [Validators.required]],
                name: ['', [Validators.required]]
            //})
        });
        
    }

    onSubmit(user){
        //console.log(user.value, user.valid);
    let headers = new Headers({ 'Content-Type': 'application/json' });

       this.http.post(this.signUpUrl, user.value)
             .toPromise()
             .then(this.extractData)
             .catch (error => console.log(error));
              this.onSuccess();
    }
    onSuccess(){
        this.router.navigate(['auth/login'])
    }

    private extractData(res: Response) {
        let body;

    if (res.text()) {
        body = res.json();
    }

    return body || {};
    }
}