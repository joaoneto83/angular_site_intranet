import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShowIfAdminModule } from '../directives/show-if-admin/show-if-admin.module';
import { EditBannerModule } from '../../intranet/_shared/edit-banner/edit-banner.module';
import { BannerHomeComponent } from './banner-home.component';
import { FiltraBannerAtivo } from './filtra-banner-ativo.pipe';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { Http } from '@angular/http';

@NgModule({
    declarations: [
        BannerHomeComponent,
        FiltraBannerAtivo
    ],
    exports: [BannerHomeComponent],
    imports: [
        CommonModule,
        RouterModule,
        ShowIfAdminModule,

        EditBannerModule,

        NgbModule.forRoot(),
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (http: Http) => new TranslateStaticLoader(http, './assets/locale', '.json'),
            deps: [Http]
        })
    ]
})
export class BannerHomeModule { }