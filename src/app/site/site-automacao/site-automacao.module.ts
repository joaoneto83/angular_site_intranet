import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SiteAutomacaoComponent } from './site-automacao.component';
import { BannerHomeModule } from '../../_shared/banner-home/banner-home.module';
import { SiteBlocoInstitucionalModule } from '../_shared/site-bloco-institucional/site-bloco-institucional.module';
import { SiteVideosModule } from '../_shared/site-videos/site-videos.module';
import { SiteAutomacaoBlocoComponent } from './site-automacao-bloco/site-automacao-bloco.component';
import { SiteAutomacaoEmailComponent } from './site-automacao-email/site-automacao-email.component';
import { SiteAutomacaoContatoComponent } from './site-automacao-contato/site-automacao-contato.component';
import { SiteCustomInputModule } from '../_shared/site-custom-input/site-custom-input.module';
import { SiteAssistenciaModule } from '../site-dicas-uso/site-entre-contato/site-assistencia/site-assistencia.module';
import { SiteAutomacaoQueroComprarComponent } from './site-automacao-quero-comprar/site-automacao-quero-comprar.component';
import { DownloadCenterSublinhaModule } from '../_shared/download-center-sublinha/download-center-sublinha.module';
import { SiteBlogCasesModule } from '../site-blog-cases/site-blog-cases.module';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { ModalBannerModule } from '../modal-banner/modal-banner.module';
import { SiteAparelhoIdealModule } from '../site-aparelho-ideal/site-aparelho-ideal.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
    declarations: [
        SiteAutomacaoComponent,
        SiteAutomacaoBlocoComponent,
        SiteAutomacaoEmailComponent,
        SiteAutomacaoContatoComponent,
        SiteAutomacaoQueroComprarComponent
    ],
    exports: [SiteAutomacaoComponent],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        Ng2SearchPipeModule,
        ModalBannerModule,
        FormsModule,
        BannerHomeModule,
        SiteBlocoInstitucionalModule,
        SiteVideosModule,
        DownloadCenterSublinhaModule,
        SiteCustomInputModule,
        SiteAssistenciaModule,
        SiteBlogCasesModule,
        SiteAparelhoIdealModule,
        NgxMaskModule.forRoot(options)
    ]
})
export class SiteAutomacaoModule { }
