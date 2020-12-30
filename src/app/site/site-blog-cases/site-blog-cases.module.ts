import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SiteCustomInputModule } from '../_shared/site-custom-input/site-custom-input.module';
import { MatExpansionModule } from '@angular/material';
import { SiteBlogCaseComponent } from './site-blog-case/site-blog-case.component';
import { SiteBlogCasesComponent } from './site-blog-cases.component';
import { SiteBlogRelacionadosComponent } from './site-blog-detalhe-cases/site-blog-ralacionados/site-blog-relacionados.component';
import { SiteBlogCardCasesComponent } from './site-blog-card-cases/site-blog-card-cases.component';
import { SiteBlogDetalheCasesComponent } from './site-blog-detalhe-cases/site-blog-detalhe-cases.component';
import { SiteBlogHomeCasesComponent } from './site-blog-home-cases/site-blog-home-cases.component';
import { SiteBlogPesquisaCasesComponent } from './site-blog-pesquisa-cases/site-blog-pesquisa-cases.component';

@NgModule({
    declarations: [
        SiteBlogCasesComponent,
        SiteBlogHomeCasesComponent,
        SiteBlogCardCasesComponent,
        SiteBlogDetalheCasesComponent,
        SiteBlogPesquisaCasesComponent,
        SiteBlogCaseComponent,

        SiteBlogRelacionadosComponent,
    ],
    exports: [SiteBlogCasesComponent, SiteBlogCaseComponent],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,

        MatExpansionModule,

        SiteCustomInputModule
    ]
})
export class SiteBlogCasesModule { }