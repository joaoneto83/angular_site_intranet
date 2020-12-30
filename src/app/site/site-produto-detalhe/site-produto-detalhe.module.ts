import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SiteProdutoDetalheComponent } from './site.produto.detalhe.component';
import { SiteSecaoVideoComponent } from './site-secao-video/site-secao-video.component';
import { SiteSecaoParallaxComponent } from './site-secao-parallax/site-secao-parallax.component';
import { SiteSecaoImagemEsquerdaComponent } from './site-secao-imagem-esquerda/site.secao-imagem-esquerda.component';
import { SiteSecaoImagemDireitaComponent } from './site-secao-imagem-direita/site.secao-imagem-direita.component';
import { SiteSecaoImagemCarrosselComponent } from './site-secao-imagem-carrossel/site.secao-imagem-carrossel.component';
import { SiteSecaoImagemBaixoComponent } from './site-secao-imagem-baixo/site-secao-imagem-baixo.component';
import { SiteSecaoIconesComponent } from './site-secao-icones/site-secao-icones.component';
import { SiteSecaoBannerComponent } from './site-secao-banner/site-secao-banner.component';
import { SiteEspecificacoesTecnicasComponent } from './site-especificacoes-tecnicas/site-especificacoes-tecnicas.component';
import { SiteDownloadCenterComponent } from './site-download-center/site-download-center.component';
import { SiteCaracteristicasComponent } from './site-caracteristicas/site-caracteristicas.component';
import { RouterModule } from '@angular/router';
import { AppPipeModule } from '../../../app/_shared/pipe/app-pipe.module';
import { SiteComparativoModule } from '../_shared/site-comparativo/site-comparativo.module';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { SiteAparelhoIdealModule } from '../site-aparelho-ideal/site-aparelho-ideal.module';
import { FormsModule } from '@angular/forms';
import { AnimateModule } from '../../../app/_shared/animate-component/animate.module';
import { SiteSecaoCarrosselComponent } from './site-secao-imagem-carrossel/site-secao-carrossel/site-secao-carrossel.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxImageZoomModule } from 'ngx-image-zoom';
import { OrderModule } from 'ngx-order-pipe';

import { SiteSecaoImagemBaixoIconesLateraisComponent } from './site-secao-imagem-baixo-icones-laterais/site-secao-imagem-baixo-icones-laterais.component';
import { SiteSecaoImagemEsquerdaIconesDireita } from './site-secao-imagem-esquerda-icones-direita/site-secao-imagem-baixo-icones-laterais.component';
import { SiteSecaoImagemDireitaIconesEsquerda } from './site-secao-imagem-direita-icones-esquerda/site-secao-imagem-direita-icones-esquerda.component';
import { SiteSecaoTituloIconesComponent } from './site-secao-titulo-icones/site-secao-titulo-icones.component';
import { SiteSecaoVideosComTituloComponent } from './site-secao-videos-com-titulo/site-secao-videos-com-titulo.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { Http } from '@angular/http';

@NgModule({
    declarations: [
        SiteProdutoDetalheComponent,
        SiteSecaoVideoComponent,
        SiteSecaoVideosComTituloComponent,
        SiteSecaoParallaxComponent,
        SiteSecaoImagemEsquerdaComponent,
        SiteSecaoImagemDireitaComponent,
        SiteSecaoImagemCarrosselComponent,
        SiteSecaoCarrosselComponent,
        SiteSecaoImagemBaixoComponent,
        SiteSecaoIconesComponent,
        SiteSecaoBannerComponent,
        SiteEspecificacoesTecnicasComponent,
        SiteDownloadCenterComponent,
        SiteCaracteristicasComponent,
        SiteSecaoImagemBaixoIconesLateraisComponent,
        SiteSecaoImagemEsquerdaIconesDireita,
        SiteSecaoImagemDireitaIconesEsquerda,
        SiteSecaoTituloIconesComponent
        

    ],
    exports: [SiteProdutoDetalheComponent],
    imports: [
        CommonModule,
        RouterModule, 
        OrderModule,
        Ng2SearchPipeModule,       

        ScrollToModule.forRoot(),
        NgbModule.forRoot(),
        NgxImageZoomModule.forRoot(),
        
        AnimateModule,
        SiteComparativoModule,
        SiteAparelhoIdealModule,
        AppPipeModule,
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (http: Http) => new TranslateStaticLoader(http, './assets/locale', '.json'),
            deps: [Http]
        })
    ]
})
export class SiteProdutoDetalheModule { }