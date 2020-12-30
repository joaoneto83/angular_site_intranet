import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { ProdutoComponent } from './produto.component';
import { SideBarComponent } from './sidebar/sidebar.component';
import { SideBarGrupoComponent } from './sidebarGrupo/sidebar.component';
import { ProdutoFotosComponent } from './produto-fotos/produto-fotos.component';
import { ModalNovoProdutoComponent } from './modal-novo-produto/modal-novo-produto.component';
import { ModalNovoModeloComponent } from './modal-novo-modelo/modal-novo-modelo.component';
import { CadastroSecaoComponent } from './cadastro-secao/cadastro.secao.component';
import { CadastroSecaoModeloDetalheComponent } from './cadastro-secao-modelo-detalhe/cadastro.secao.modelo.component';

/*Cadastro Seção Modelo*/
import { CadastroSecaoModeloComponent } from './cadastro-secao-modelo/cadastro.secao.modelo.component';

import { ModalArquivoComponent } from './modal-arquivo/modal-arquivo.component';
import { CadastroModeloComponent } from './cadastro-modelo/cadastro-modelo.component';
import { CadastroEspecificacaoComponent } from './cadastro-especificacao/cadastro-especificacao.component';
import { CadastroClassificacaoComponent } from './cadastro-classificacao/cadastro.classificacao.component';
import { CadastroCaracteristicasComponent } from './cadastro-caracteristicas/cadastro.caracteristicas.component';
import { BlocoComponent } from './bloco/bloco.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatExpansionModule } from '@angular/material';
import { SubMenuModule } from '../_shared/submenu/submenu.module';
import { TituloSecoesProdutoModule } from '../_shared/titulo-secoes-produto/titulo-secoes-produto.module';
import { CustomInputModule } from '../_shared/custom-input/custom-input.module';
import { AppPipeModule } from '../../../app/_shared/pipe/app-pipe.module';
import { NgxGalleryModule } from 'ngx-gallery';
import { UploadFileModule } from '../_shared/upload-file/upload-file.module';
import { BoxModule } from '../_shared/box/box.module';
import { OrderModule } from 'ngx-order-pipe';
import { ShowIfAdminModule } from '../../../app/_shared/directives/show-if-admin/show-if-admin.module';
import { CadastroPalavraChaveComponent } from './cadastro-palavra-chave/cadastro-palavra-chave.component';
import { ModalEnviarArquivoModule } from '../_shared/modal-enviar-arquivo/modal-enviar-arquivo.module';
import { ModalVisualizarImagemModule } from '../_shared/modal-visualizar-imagem/modal-visualizar-imagem.module';
import { CKEditorModule } from 'ng2-ckeditor';
import { ModalCopiarProdutoComponent } from './modal-copiar-produto/modal-copiar-produto.component';
import { PesquisaProdutoNome } from './modal-copiar-produto/pesquisa-produto-nome.pipe';
import { NgxCurrencyModule } from "ngx-currency";
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ModalTraducaoModule } from '../_shared/modal-traducao/modal-traducao.module';


@NgModule({
    declarations: [
        ProdutoComponent,
      SideBarComponent,
      SideBarGrupoComponent,
        ProdutoFotosComponent,
        ModalNovoProdutoComponent,
        ModalNovoModeloComponent,
        ModalArquivoComponent,
      CadastroSecaoComponent,
      CadastroSecaoModeloDetalheComponent,
        CadastroModeloComponent,
        CadastroEspecificacaoComponent,
        CadastroClassificacaoComponent,
        CadastroCaracteristicasComponent,
        BlocoComponent,
        CadastroPalavraChaveComponent,
        CadastroSecaoModeloComponent,
        ModalCopiarProdutoComponent,
        PesquisaProdutoNome
    ],
    exports: [ProdutoComponent],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        Ng2SearchPipeModule,

        NgbModule.forRoot(),
        MatExpansionModule,
        NgxGalleryModule,
        OrderModule,
        CKEditorModule,

        SubMenuModule,
        TituloSecoesProdutoModule,
        CustomInputModule,
        AppPipeModule,
        UploadFileModule,
        BoxModule,
        ShowIfAdminModule,
        ModalEnviarArquivoModule,
        ModalVisualizarImagemModule,
        ModalTraducaoModule,
        NgxCurrencyModule
    ]
})
export class ProdutoModule { }
