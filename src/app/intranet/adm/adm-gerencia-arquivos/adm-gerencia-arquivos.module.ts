import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdmGerenciaArquivosComponent } from './adm-gerencia-arquivos.component';
import { UploadFileModule } from '../../_shared/upload-file/upload-file.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { TituloSecoesProdutoModule } from '../../_shared/titulo-secoes-produto/titulo-secoes-produto.module';
import { MatExpansionModule } from '@angular/material';

@NgModule({
    declarations: [
        AdmGerenciaArquivosComponent
    ],
    exports: [AdmGerenciaArquivosComponent],
    imports: [
        CommonModule,
        RouterModule,
        MatExpansionModule,
        Ng2SearchPipeModule,
        FormsModule,
        ReactiveFormsModule,
        TituloSecoesProdutoModule,
        UploadFileModule

    ]
})
export class AdmGerenciaArquivosModule { }