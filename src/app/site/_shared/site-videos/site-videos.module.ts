import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SiteVideosComponent } from './site-videos.component';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { Http } from '@angular/http';

@NgModule({
    declarations: [
        SiteVideosComponent
    ],
    exports: [SiteVideosComponent],
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
export class SiteVideosModule { }