import { NgModule } from '@angular/core';

import { IntranetComponent } from './intranet.component';
import { IntranetRouteModule } from './intranet.route.module';
import { ProdutoModule } from './produto/produto.module';
import { TreinamentoModule } from './treinamento/treinamento.module';
import { TabelaPrecoModule } from './tabela-preco/tabela-preco.module';
import { CatalogoModule } from './catalogo/catalogo.module';
import { MerchandisingModule } from './merchandising/merchandising.module';
import { TiModule } from './ti/ti.module';
import { RHModule } from './rh/rh.module';
import { HeaderModule } from './header/header.module';
import { HomeModule } from './home/home.module';
import { ConfigModule } from './_shared/config/config.module';
import { CommonModule } from '@angular/common';
import { AdmModule } from './adm/adm.module';
import { MeusDadosModule } from './meus-dados/meus-dados.module';
import { LoginModule } from './login/login.module';
import { AvisoDetalheModule } from './_shared/aviso-detalhe/aviso-detalhe.module';
import { BlogsModule } from './blogs/blogs.module';
import { TreinamentoMerchanModule } from './treinamento-merchan/treinamento-merchan.module';

@NgModule({
  declarations: [
    IntranetComponent,
  ],
  imports: [   
    CommonModule,
    BlogsModule,
    ProdutoModule,
    TreinamentoModule,
    TabelaPrecoModule,
    CatalogoModule,
    MerchandisingModule,
    TreinamentoMerchanModule,
    TiModule,
    RHModule,    
    HeaderModule,
    HomeModule,
    ConfigModule,
    AdmModule,
    MeusDadosModule,
    LoginModule,
    AvisoDetalheModule,

    IntranetRouteModule,
  ],
  bootstrap: [IntranetComponent]
})
export class IntranetModule { }
