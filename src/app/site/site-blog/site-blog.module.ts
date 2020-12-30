import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SiteCustomInputModule } from '../_shared/site-custom-input/site-custom-input.module';
import { MatExpansionModule } from '@angular/material';
import { SiteBlogComponent } from './site-blog.component';
import { SiteBlogPesquisaComponent } from './site-blog-pesquisa/site-blog-pesquisa.component';
import { SiteBlogRelacionadosComponent } from './site-blog-detalhe/site-blog-ralacionados/site-blog-relacionados.component';
import { SiteBlogSidebarComponent } from './site-blog-sidebar/site-blog-sidebar.component';
import { SiteBlogCardComponent } from './site-blog-card/site-blog-card.component';
import { SiteBlogDetalheComponent } from './site-blog-detalhe/site-blog-detalhe.component';
import { SiteBlogFooterComponent } from './site-blog-footer/site-blog-footer.component';
import { SiteBlogHeaderComponent } from './site-blog-header/site-blog-header.component';
import { SiteBlogHomeComponent } from './site-blog-home/site-blog-home.component';

@NgModule({
    declarations: [
        SiteBlogComponent,
        SiteBlogHomeComponent,
        SiteBlogCardComponent,
        SiteBlogDetalheComponent,
        SiteBlogFooterComponent,
        SiteBlogHeaderComponent,
        SiteBlogPesquisaComponent,
        SiteBlogRelacionadosComponent,
        SiteBlogSidebarComponent
    ],
    exports: [SiteBlogComponent],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,

        MatExpansionModule,

        SiteCustomInputModule
    ]
})
export class SiteBlogModule { }