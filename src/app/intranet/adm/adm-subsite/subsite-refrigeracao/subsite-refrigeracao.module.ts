import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { TituloSecoesProdutoModule } from '../../../_shared/titulo-secoes-produto/titulo-secoes-produto.module';
import { MatExpansionModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SubsiteRefrigeracaoComponent } from './subsite-refrigeracao.component';
import { ModalVisualizarImagemModule } from '../../../_shared/modal-visualizar-imagem/modal-visualizar-imagem.module';
import { UploadFileModule } from '../../../_shared/upload-file/upload-file.module';
import { BannerHomeModule } from '../../../../_shared/banner-home/banner-home.module';
import { EditBannerModule } from '../../../_shared/edit-banner/edit-banner.module';
import { ModalSelecionarProdutoComponent } from './modal-selecionar-produto/modal-selecionar-produto.component';
import { PesquisaProdutoNome } from './modal-selecionar-produto/pesquisa-produto-nome.pipe';
import { CustomInputModule } from '../../../_shared/custom-input/custom-input.module';
import { SubsiteRefrigeracaoEventosComponent } from './subsite-refrigeracao-eventos/subsite-refrigeracao-eventos.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ModalEditarEventoComponent } from './subsite-refrigeracao-eventos/modal-editar-evento/modal-editar-evento.component';
import { ModalIntegradorEditComponent } from './subsite-refrigeracao-integrador/modal-integrador-edit/modal-integrador-edit.component';
import { SubsiteRefrigeracaoIntegradorComponent } from './subsite-refrigeracao-integrador/subsite-refrigeracao-integrador.component';
import { ModalTraducaoModule } from '../../../../intranet/_shared/modal-traducao/modal-traducao.module';

@NgModule({
    declarations: [
        SubsiteRefrigeracaoComponent,
        ModalSelecionarProdutoComponent,
        PesquisaProdutoNome,
        SubsiteRefrigeracaoEventosComponent,
        ModalEditarEventoComponent,
        SubsiteRefrigeracaoIntegradorComponent,
        ModalIntegradorEditComponent
    ],
    exports: [SubsiteRefrigeracaoComponent],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,

        MatExpansionModule,

        TituloSecoesProdutoModule,
        ModalVisualizarImagemModule,
        UploadFileModule,
        BannerHomeModule,
        EditBannerModule,
        CustomInputModule,
        NgxPaginationModule,
        ModalTraducaoModule
        
    ]
})
export class SubsiteRefrigeracaoModule { }