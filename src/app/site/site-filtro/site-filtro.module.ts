import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { SiteFiltroComponent } from './site-filtro.component';
import { SiteListaCardsComponent } from './site-lista-cards/site-lista-cards.component';
import { SiteFiltroSidebarComponent } from './site-filtro-sidebar/site-filtro-sidebar.component';
import { SiteCarrosselProdutosComponent } from './site-card-produtos/site-carrossel-produtos/site-carrossel-produtos.component';
import { SiteCardProdutosComponent } from './site-card-produtos/site-card-produtos.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SiteFiltroPipe } from './site-filtro.pipe';
import { SiteComparativoModule } from '../_shared/site-comparativo/site-comparativo.module';
import { SiteAparelhoIdealModule } from '../site-aparelho-ideal/site-aparelho-ideal.module';
import { MatExpansionModule } from '@angular/material';
import { FormsModule } from '@angular/forms';
import { ClickOutsideModule } from '../../_shared/directives/click-outside/click-outside.module';
import { OrderModule } from 'ngx-order-pipe';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { Http } from '@angular/http';
import { FilterPipe } from './filter.pipe';

@NgModule({
    declarations: [
        SiteFiltroComponent,
        SiteListaCardsComponent,
        SiteFiltroSidebarComponent,
        SiteCardProdutosComponent,
        SiteCarrosselProdutosComponent,
        SiteFiltroPipe,
        FilterPipe
    ],
    exports: [SiteFiltroComponent],
    imports: [
        CommonModule,
        RouterModule,
        OrderModule,
        FormsModule,

        NgbModule.forRoot(),
        MatExpansionModule,

        SiteAparelhoIdealModule,
        SiteComparativoModule,
        ClickOutsideModule,
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (http: Http) => new TranslateStaticLoader(http, './assets/locale', '.json'),
            deps: [Http]
        })
    ]
})
export class SiteFiltroModule { }