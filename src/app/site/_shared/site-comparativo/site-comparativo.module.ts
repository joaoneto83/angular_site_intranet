import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { SiteComparativoComponent } from './site-comparativo.component';
import { SiteComparativoHeaderComponent } from './site-comparativo-header/site-comparativo-header.component';
import { SiteComparativoDetalheComponent } from './site-comparativo-detalhe/site-comparativo-detalhe.component';
import { FormsModule } from '@angular/forms';
import { ClickOutsideModule } from '../../../_shared/directives/click-outside/click-outside.module';
import { SiteComparativoPrecoComponent } from './site-comparativo-preco/site-comparativo-preco.component';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { Http } from '@angular/http';

@NgModule({
    declarations: [
        SiteComparativoComponent,
        SiteComparativoHeaderComponent,
        SiteComparativoPrecoComponent,
        SiteComparativoDetalheComponent
    ],
    exports: [SiteComparativoComponent],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ClickOutsideModule,
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (http: Http) => new TranslateStaticLoader(http, './assets/locale', '.json'),
            deps: [Http]
        })
    ]
})
export class SiteComparativoModule { }