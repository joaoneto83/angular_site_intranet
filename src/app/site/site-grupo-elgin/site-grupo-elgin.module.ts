import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { SiteGrupoElginComponent } from './site.grupo-elgin.component';
import { SiteLinhaTempoComponent } from './site-linha-tempo/site-linha-tempo.component';
import { SiteBlocoLinhaTempoComponent } from './site-linha-tempo/site-bloco-linha-tempo/site-bloco-linha-tempo.component';
import { SiteDetalheGrupoComponent } from './site-detalhe-grupo/site.detalhe-grupo.component';
import { SiteDetalheMenuComponent } from './site-detalhe-grupo/site-detalhe-menu/site.detalhe-menu.component';
import { SiteBlocoLinkComponent } from './site-bloco-link/site.bloco-link.component';

@NgModule({
    declarations: [
        SiteGrupoElginComponent,
        SiteLinhaTempoComponent,
        SiteBlocoLinhaTempoComponent,
        SiteDetalheGrupoComponent,
        SiteDetalheMenuComponent,
        SiteBlocoLinkComponent
    ],
    exports: [SiteGrupoElginComponent],
    imports: [
        CommonModule,
        RouterModule,
    ]
})
export class SiteGrupoElginModule { }