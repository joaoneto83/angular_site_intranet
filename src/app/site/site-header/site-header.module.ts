import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { SiteHeaderComponent } from './site.header.component';
import { SiteSubMenuComponent } from './site-submenu/site.submenu.component';
import { SiteSubMenuAutomacaoComponent } from './site-submenu-automacao/site.submenu.automacao.component';
import { OrderModule } from 'ngx-order-pipe';
import { AnimateModule } from '../../_shared/animate-component/animate.module';
import { FormsModule } from '@angular/forms';
import { SiteSubMenuGelattaComponent } from './site-submenu-gelatta/site.submenu.gelatta.component';
import { SiteSubMenuRefrigeracaoComponent } from './site-submenu-refrigeracao/site.submenu.refrigeracao.component';
import { SiteSubMenuMobileComponent } from './site-submenu/site-submenu-mobile/site.submenu.mobile.component';
import { SiteSubMenuGelattaMobileComponent } from './site-submenu-gelatta/site-submenu-gelatta-mobile/site.submenu.gelatta.mobile.component';
import { SiteSubMenuRefrigeracaoMobileComponent } from './site-submenu-refrigeracao/site-submenu-refrigeracao-mobile/site.submenu.refrigeracao.mobile.component';
import { AppPipeModule } from '../../_shared/pipe/app-pipe.module';
import { SiteSubMenuAutomacaoMobileComponent } from './site-submenu-automacao/site-submenu-automacao-mobile/site.submenu.automacao.mobile.component';
import { ClickOutsideModule } from '../../_shared/directives/click-outside/click-outside.module';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { Http } from '@angular/http';

@NgModule({
    declarations: [
        SiteHeaderComponent,
        SiteSubMenuComponent,
        SiteSubMenuAutomacaoComponent,
        SiteSubMenuGelattaComponent,
        SiteSubMenuRefrigeracaoComponent,
        SiteSubMenuMobileComponent,
        SiteSubMenuGelattaMobileComponent,
        SiteSubMenuRefrigeracaoMobileComponent,
        SiteSubMenuAutomacaoMobileComponent
    ],
    exports: [SiteHeaderComponent],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,

        AnimateModule,
        OrderModule,
        AppPipeModule,
        ClickOutsideModule,
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (http: Http) => new TranslateStaticLoader(http, './assets/locale', '.json'),
            deps: [Http]
        })
    ]
})
export class SiteHeaderModule { }