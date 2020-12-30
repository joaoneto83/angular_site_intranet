import { NgModule, LOCALE_ID, ErrorHandler } from '@angular/core';

import { SiteComponent } from './site.component';
import { SiteRouteModule } from './site.route.module';

import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import { SiteSolarModule } from './site-solar/site.solar.module';
import { SiteSejaAssistenciaModule } from './site-seja-assistencia-tecnica/site-seja-assistencia.module';
import { SiteProdutoDetalheModule } from './site-produto-detalhe/site-produto-detalhe.module';
import { SiteComparativoModule } from './_shared/site-comparativo/site-comparativo.module';
import { SiteAparelhoIdealModule } from './site-aparelho-ideal/site-aparelho-ideal.module';
import { SiteDicasUsoModule } from './site-dicas-uso/site-dicas-uso.module';
import { SiteHomeModule } from './site-home/site-home.module';
import { SiteHeaderModule } from './site-header/site-header.module';
import { SiteGrupoElginModule } from './site-grupo-elgin/site-grupo-elgin.module';
import { SiteFiltroModule } from './site-filtro/site-filtro.module';
import { SiteFooterModule } from './site-footer/site-footer.module';
import { SiteBlogModule } from './site-blog/site-blog.module';
import { GlobalErrorHandler } from '../_core/global-error-handler/global-error-handler';
import { SiteBuscaProdutoModule } from './site-busca-produto/site-busca-produto.module';
import { LoginModule } from '../intranet/login/login.module';
import { SiteSejaIntegradorModule } from './site-seja-integrador/site-seja-integrador.module';
import { SiteTrabalheConoscoModule } from './site-trabalhe-conosco/site-trabalhe-conosco.module';
import { SiteGelattaModule } from './site-gelatta/site-gelatta.module';
import { SiteRefrigeracaoModule } from './site-refrigeracao/site-refrigeracao.module';
import { SiteAutomacaoModule } from './site-automacao/site-automacao.module';
import { SiteBlogCasesModule } from './site-blog-cases/site-blog-cases.module';
import { CadastrosModule } from './cadastros/cadastros.module';
import { TituloSecoesProdutoModule } from '../intranet/_shared/titulo-secoes-produto/titulo-secoes-produto.module';
import { CanalDenunciaModule } from './canal_denuncia/cadastrosExterno.module';
import { ModalBannerModule } from './modal-banner/modal-banner.module';
import { CadastrosExternoModule } from './cadastros-externos/cadastrosExterno.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

registerLocaleData(localePt);

@NgModule({
  declarations: [
    SiteComponent,
    ],
  imports: [
    SiteSolarModule,
    SiteSejaAssistenciaModule,
    SiteProdutoDetalheModule,
    SiteComparativoModule,
    SiteAparelhoIdealModule,
    SiteDicasUsoModule,
    SiteHomeModule,
    SiteHeaderModule,
    SiteGrupoElginModule,
    SiteFiltroModule,
    SiteFooterModule,
    SiteBlogModule,
    SiteBuscaProdutoModule,
    SiteSejaIntegradorModule,
    LoginModule,
    SiteRouteModule,
    Ng2SearchPipeModule,
    SiteTrabalheConoscoModule,
    SiteGelattaModule,
    SiteRefrigeracaoModule,
    SiteAutomacaoModule,
    CadastrosModule,
    CadastrosExternoModule,
    CanalDenunciaModule,
    TituloSecoesProdutoModule,
    ModalBannerModule,
    SiteBlogCasesModule
  ],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: "pt-BR"
    },
    // {
    //   provide: ErrorHandler,
    //   useClass: GlobalErrorHandler
    // }
],
  bootstrap: [SiteComponent]
})
export class SiteModule { }
