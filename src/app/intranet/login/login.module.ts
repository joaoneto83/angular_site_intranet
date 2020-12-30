import { NgModule } from "@angular/core";
import { LoginComponent } from './login.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SiteHeaderModule } from '../../../app/site/site-header/site-header.module';

@NgModule({
    declarations: [
        LoginComponent
    ],
    exports: [LoginComponent],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,

        SiteHeaderModule
    ]
})
export class LoginModule { }