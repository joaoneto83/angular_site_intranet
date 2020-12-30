import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SiteBlocoInstitucionalComponent } from './site-bloco-institucional.component';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { Http } from '@angular/http';

@NgModule({
    declarations: [
        SiteBlocoInstitucionalComponent
    ],
    exports: [SiteBlocoInstitucionalComponent],
    imports: [
        CommonModule,
        RouterModule,
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (http: Http) => new TranslateStaticLoader(http, './assets/locale', '.json'),
            deps: [Http]
        })
    ]
})
export class SiteBlocoInstitucionalModule { }