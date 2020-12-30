import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { TiComponent } from './ti.component';
import { SugestaoComponent } from './sugestao/sugestao.component';
import { AvisoModule } from '../_shared/aviso/aviso.module';
import { ButtonGradientModule } from '../_shared/button-gradient/button-gradient.module';
import { CardProdutosModule } from '../_shared/card-produtos/card-produtos.module';
import { TituloCategoriaModule } from '../_shared/titulo-categoria/titulo-categoria.module';
import { FiltraPorCategoriaTi } from './filtra-por-categoria-ti.pipe';
import { CustomInputModule } from '../_shared/custom-input/custom-input.module';
import { ModuloArquivoTiComponent } from './modulo-arquivo-ti/modulo-arquivo-ti.component';
import { EditModuloArquivoTiComponent } from './modulo-arquivo-ti/edit-modulo-arquivo-ti/edit-modulo-arquivo-ti.component';
import { UploadFileMultipleModule } from '../_shared/upload-file-multiple/upload-file-multiple.module';
import { ShowIfAdminModule } from '../../_shared/directives/show-if-admin/show-if-admin.module';
import { CardModuloArquivoTiComponent } from './modulo-arquivo-ti/card-modulo-arquivo-ti/card-modulo-arquivo-ti.component';

@NgModule({
    declarations: [
        TiComponent,
        ModuloArquivoTiComponent,
        EditModuloArquivoTiComponent,
        CardModuloArquivoTiComponent,
        SugestaoComponent,
        FiltraPorCategoriaTi
    ],
    exports: [TiComponent],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        TextMaskModule,
        AvisoModule,
        ButtonGradientModule,
        CardProdutosModule,
        TituloCategoriaModule,
        CustomInputModule,
        UploadFileMultipleModule,
        ShowIfAdminModule
    ]
})
export class TiModule { }