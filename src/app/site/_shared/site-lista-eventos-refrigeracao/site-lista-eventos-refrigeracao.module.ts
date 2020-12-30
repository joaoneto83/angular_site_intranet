import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SiteListaEventosRefrigeracaoComponent } from './site-lista-eventos-refrigeracao.component';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { Http } from '@angular/http';

@NgModule({
    declarations: [
        SiteListaEventosRefrigeracaoComponent
    ],
    exports: [SiteListaEventosRefrigeracaoComponent],
    imports: [
        CommonModule,
        RouterModule,

        NgbModule.forRoot(),
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (http: Http) => new TranslateStaticLoader(http, './assets/locale', '.json'),
            deps: [Http]
        })
    ]
})
export class SiteListaEventosRefrigeracaoModule { }