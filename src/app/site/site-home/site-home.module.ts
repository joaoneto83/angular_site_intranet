import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { SiteHomeComponent } from './site.home.component';
import { SiteBlocoCategoriaComponent } from './site-bloco-categoria/site.bloco-categoria.component';
import { SiteFaleConoscoComponent } from './site-fale-conosco/site.fale-conosco.component';
import { SiteBannerModule } from '../_shared/site-banner/site-banner.module';
import { ListaLinksModule } from '../_shared/lista-links/lista-links.module';
import { BannerHomeModule } from '../../_shared/banner-home/banner-home.module';
import { ModalBannerModule } from '../modal-banner/modal-banner.module';

@NgModule({
    declarations: [
        SiteHomeComponent,
        SiteBlocoCategoriaComponent,
        SiteFaleConoscoComponent
    ],
    exports: [SiteHomeComponent],
    imports: [
        CommonModule,
        RouterModule,
        ModalBannerModule,
        SiteBannerModule,
        ListaLinksModule,
        BannerHomeModule
    ]
})
export class SiteHomeModule { }