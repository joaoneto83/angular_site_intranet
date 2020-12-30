import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { TituloSecoesProdutoModule } from '../../_shared/titulo-secoes-produto/titulo-secoes-produto.module';
import { MatExpansionModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdmBannerHomeComponent } from './adm-banner-home.component';
import { BannerHomeModule } from '../../../_shared/banner-home/banner-home.module';

@NgModule({
    declarations: [
        AdmBannerHomeComponent
    ],
    exports: [AdmBannerHomeComponent],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,

        MatExpansionModule,

        TituloSecoesProdutoModule,
        BannerHomeModule
    ]
})
export class AdmBannerHomeModule { }