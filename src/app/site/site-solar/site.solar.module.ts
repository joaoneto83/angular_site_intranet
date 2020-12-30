import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { SiteSolarComponent } from './site.solar.component';
import { SiteSolarProdutoComponent } from './site-solar-produto/site-solar-produto.component';
import { SiteSolarIntegradorComponent } from './site-solar-integrador/site.solar.integrador.component';
import { SiteSolarCalculoComponent } from './site-solar-calculo/site.solar.calculo';
import { SiteSolarResultadoComponent } from './site-solar-resultado/site-solar-resultado.component';
import { SiteInfoSolarComponent } from './site-info-solar/site.info-solar.component';
import { SiteEmailSolarComponent } from './site-email-solar/site.email-solar.component';
import { SiteVantagemSolarComponent } from './site-vantagens-solar/site.vantagem-solar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { Ng2SearchPipeModule } from 'ng2-search-filter';


@NgModule({
    declarations: [
        SiteSolarComponent,
        SiteSolarProdutoComponent,
        SiteSolarIntegradorComponent,
        SiteSolarCalculoComponent,
        SiteSolarResultadoComponent,
        SiteVantagemSolarComponent,
        SiteInfoSolarComponent,
        SiteEmailSolarComponent
    ],
    exports: [SiteSolarComponent],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        Ng2SearchPipeModule,
        FormsModule,

        NgbModule
    ]
})
export class SiteSolarModule { }