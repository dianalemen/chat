import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { AuthService } from './auth.service';

@NgModule({
    imports: [
    CommonModule,
    RouterModule
    ],
    declarations: [
    NavComponent, 
    HeaderComponent
    ],
    exports: [
    NavComponent, 
    HeaderComponent
    ],
    providers: [AuthService]
})

export class CoreModule{

}