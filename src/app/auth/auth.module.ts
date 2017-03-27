import { NgModule } from '@angular/core';
import { SharedModule } from '../shared';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthRoutingModule } from './auth-routing.module';
import { AuthService } from '../core/auth.service';
import { UserService } from './../shared/user.servise';

@NgModule({
    declarations:[
        AuthComponent,
        LoginComponent,
        RegisterComponent

    ],
    imports: [
        SharedModule,
        AuthRoutingModule,
    ],
    providers:[AuthService]
})

export class AuthModule{}