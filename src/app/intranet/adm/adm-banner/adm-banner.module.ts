import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { TituloSecoesProdutoModule } from '../../_shared/titulo-secoes-produto/titulo-secoes-produto.module';
import { MatExpansionModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdmBannerComponent } from './adm-banner.component';
import { BannerHomeModule } from '../../../_shared/banner-home/banner-home.module';
import { ModalTraducaoModule } from '../../_shared/modal-traducao/modal-traducao.module';

@NgModule({
    declarations: [
        AdmBannerComponent
    ],
    exports: [AdmBannerComponent],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,

        MatExpansionModule,

        TituloSecoesProdutoModule,
        BannerHomeModule,
        ModalTraducaoModule
    ]
})
export class AdmBannerHomeModule { }