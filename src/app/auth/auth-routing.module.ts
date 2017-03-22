import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthComponent } from './auth.component';

const authRouters: Routes = [
    {
        path:'',
        component: AuthComponent,
        children:[{
            path: 'login',
            component: LoginComponent
        },
        {
            path: 'register',
            component: RegisterComponent
        }]
    }
];

@NgModule({
    imports:[
        RouterModule.forChild(authRouters)
    ],
    exports:[
        RouterModule
    ],
    providers:[]
})

export class AuthRoutingModule{}