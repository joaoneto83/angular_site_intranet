import { SiteRefrigeracaoComponent } from "./site-refrigeracao.component";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { BannerHomeModule } from '../../_shared/banner-home/banner-home.module';
import { ListaLinksModule } from '../_shared/lista-links/lista-links.module';
import { SiteGrupoDestaqueComponent } from './site-grupo-destaque/site-grupo-destaque.component';
import { SiteBlocoSegmentosComponent } from './site-bloco-segmentos/site-bloco-segmentos.component';
import { SiteCarrosselGrupoDestaqueComponent } from './site-grupo-destaque/site-carrossel-produtos/site-carrossel-grupo-destaque.component';
import { SiteVideosModule } from '../_shared/site-videos/site-videos.module';
import { SiteRefrigeracaoInfoComponent } from './site-refrigeracao-info/site-refrigeracao-info.component';
import { SiteRefrigeracaoEmailComponent } from './site-refrigeracao-email/site-refrigeracao-email.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SiteCustomInputModule } from '../_shared/site-custom-input/site-custom-input.module';
import { SiteRefrigeracaoSegmentosComponent } from './site-refrigracao-segmentos/site-refrigeracao-segmentos.component';
import { SiteRefrigeracaoContatoComponent } from './site-refrigeracao-contato/site-refrigeracao-contato.component';
import { SiteListaIntegradoresModule } from '../_shared/site-lista-integradores/site-lista-integradores.module';
import { SiteRefrigeracaoSegmentosContatoComponent } from './site-refrigracao-segmentos/site-refrigeracao-segmentos-contato/site-refrigeracao-segmentos-contato.component';
import { SiteBlocoInstitucionalModule } from '../_shared/site-bloco-institucional/site-bloco-institucional.module';
import { SiteProdutosSegmentosComponent } from './site-refrigracao-segmentos/site-produtos-segmentos/site-produtos-segmentos.component';
import { SiteRefrigeracaoCalendarioComponent } from './site-refrigeracao-calendario/site-refrigeracao-calendario.component';
import { SiteListaEventosRefrigeracaoModule } from '../_shared/site-lista-eventos-refrigeracao/site-lista-eventos-refrigeracao.module';
import { SiteRefrigeracaoTreinamentoComponent } from './site-refrigeracao-treinamento/site-refrigeracao-treinamento.component';
import { SiteRefrigeracaoQualidadeComponent } from './site-refrigeracao-qualidade/site-refrigeracao-qualidade.component';
import { DownloadCenterSublinhaModule } from '../_shared/download-center-sublinha/download-center-sublinha.module';
import { TranslateModule, TranslateStaticLoader, TranslateLoader } from 'ng2-translate';
import { SiteBlogCasesModule } from '../site-blog-cases/site-blog-cases.module';
import { Http } from '@angular/http';


@NgModule({
    declarations: [
        SiteRefrigeracaoComponent,
        SiteGrupoDestaqueComponent,
        SiteBlocoSegmentosComponent,
        SiteCarrosselGrupoDestaqueComponent,
        SiteRefrigeracaoInfoComponent,
        SiteRefrigeracaoEmailComponent,
        SiteRefrigeracaoSegmentosComponent,
        SiteRefrigeracaoContatoComponent,
        SiteRefrigeracaoSegmentosComponent,
        SiteRefrigeracaoSegmentosContatoComponent,
        SiteProdutosSegmentosComponent,
        SiteRefrigeracaoCalendarioComponent,
        SiteRefrigeracaoTreinamentoComponent,
        SiteRefrigeracaoQualidadeComponent
    ],
    exports: [SiteRefrigeracaoComponent],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,

        BannerHomeModule,
        ListaLinksModule,
        SiteBlogCasesModule,
        SiteVideosModule,
        DownloadCenterSublinhaModule,
        SiteCustomInputModule,
        SiteListaIntegradoresModule,
        SiteBlocoInstitucionalModule,
        SiteListaEventosRefrigeracaoModule,

        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (http: Http) => new TranslateStaticLoader(http, './assets/locale', '.json'),
            deps: [Http]
        })
    ]
})
export class SiteRefrigeracaoModule { }
