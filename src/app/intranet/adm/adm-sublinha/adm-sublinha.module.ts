import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { MatExpansionModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdmSublinhaComponent } from './adm-sublinha.component';
import { AdmSublinhaEditComponent } from './adm-sublinha-edit/adm-sublinha-edit.component';
import { CustomInputModule } from '../../_shared/custom-input/custom-input.module';
import { ShowIfAdminModule } from '../../../_shared/directives/show-if-admin/show-if-admin.module';
import { TituloSecoesProdutoModule } from '../../_shared/titulo-secoes-produto/titulo-secoes-produto.module';
import { UploadFileModule } from '../../_shared/upload-file/upload-file.module';
import { ModalVisualizarImagemModule } from '../../_shared/modal-visualizar-imagem/modal-visualizar-imagem.module';
import { ModalTraducaoComponent } from '../../_shared/modal-traducao/modal-traducao.component';
import { ModalTraducaoModule } from '../../_shared/modal-traducao/modal-traducao.module';

@NgModule({
    declarations: [
        AdmSublinhaComponent,
        AdmSublinhaEditComponent
    ],
    exports: [AdmSublinhaComponent],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,

        MatExpansionModule,
        CustomInputModule,
        ShowIfAdminModule,
        TituloSecoesProdutoModule,
        UploadFileModule,
        ModalVisualizarImagemModule,
        ModalTraducaoModule
    ]
})
export class AdmSublinhaModule { }