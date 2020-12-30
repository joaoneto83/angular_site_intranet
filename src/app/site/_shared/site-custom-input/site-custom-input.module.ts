import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SiteCustomInputComponent } from './site-custom-input.component';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { Http } from '@angular/http';

@NgModule({
    declarations: [
        SiteCustomInputComponent
    ],
    exports: [SiteCustomInputComponent],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (http: Http) => new TranslateStaticLoader(http, './assets/locale', '.json'),
            deps: [Http]
        })
    ]
})
export class SiteCustomInputModule { }