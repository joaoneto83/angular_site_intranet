import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { TituloSecoesProdutoModule } from '../../../_shared/titulo-secoes-produto/titulo-secoes-produto.module';
import { MatExpansionModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SubsiteGelattaComponent } from './subsite-gelatta.component';
import { ModalVisualizarImagemModule } from '../../../_shared/modal-visualizar-imagem/modal-visualizar-imagem.module';
import { UploadFileModule } from '../../../_shared/upload-file/upload-file.module';

@NgModule({
    declarations: [
        SubsiteGelattaComponent
    ],
    exports: [SubsiteGelattaComponent],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,

        MatExpansionModule,

        TituloSecoesProdutoModule,
        ModalVisualizarImagemModule,
        UploadFileModule
    ]
})
export class SubsiteGelattaModule { }