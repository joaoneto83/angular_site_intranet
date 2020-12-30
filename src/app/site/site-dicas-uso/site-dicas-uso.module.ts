import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SiteDicasUsoComponent } from './site.dicas.uso.component';
import { SiteEntreContatoComponent } from './site-entre-contato/site-entre-contato.component';
import { SiteDownloadCenterComponent } from './site-download-center/site.download-center.component';
import { SiteDicasUsoPesquisaComponent } from './site-dicas-uso-pesquisa/site.dicas.uso.pesquisa.component';
import { SiteDicasUsoEmailComponent } from './site-dicas-uso-email/site.dicas.uso.email.component';
import { SiteDetalheDicasComponent } from './site-detalhe-dicas/site.detalhe-dicas.component';
import { SiteDetalheCategoriasComponent } from './site-detalhe-dicas/site-detalhe-categorias/site.detalhe.categorias.component';
import { SiteDetalheRelacionadoComponent } from './site-detalhe-dicas/site-detalhe-relacionado/site.detalhe-relacionado.component';
import { SiteCardPostagemComponent } from './site-card-postagem/site.card-postagem.component';
import { SiteCustomInputModule } from '../_shared/site-custom-input/site-custom-input.module';
import { MatExpansionModule, MatIcon, MatIconModule } from '@angular/material';
import { AppPipeModule } from '../../../app/_shared/pipe/app-pipe.module';
import { SiteAssistenciaModule } from './site-entre-contato/site-assistencia/site-assistencia.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { OrderModule } from 'ngx-order-pipe';


@NgModule({
    declarations: [
        SiteDicasUsoComponent,
        SiteEntreContatoComponent,
        SiteDownloadCenterComponent,
        SiteDicasUsoPesquisaComponent,
        SiteDicasUsoEmailComponent,
        SiteDetalheDicasComponent,
        SiteDetalheCategoriasComponent,
        SiteDetalheRelacionadoComponent,
        SiteCardPostagemComponent
    ],
    exports: [SiteDicasUsoComponent],
    imports: [
        CommonModule,
        RouterModule,
        Ng2SearchPipeModule,
        ReactiveFormsModule,
        FormsModule,
        OrderModule,
        MatExpansionModule,
        MatIconModule,
        SiteAssistenciaModule,
        SiteCustomInputModule,
        AppPipeModule
    ]
})
export class SiteDicasUsoModule { }