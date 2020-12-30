import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMasonryModule } from 'ngx-masonry';
import { MerchandisingComponent } from './merchandising.component';
import { LogosComponent } from './logos/logos.component';
import { ElginUpComponent } from './elgin-up/elgin-up.component';
import { BannerModule } from '../_shared/banner/banner.module';
import { ButtonGradientModule } from '../_shared/button-gradient/button-gradient.module';
import { DescricaoCaminhoModule } from '../_shared/descricao-caminho/descricao-caminho.module';
import { TituloCategoriaModule } from '../_shared/titulo-categoria/titulo-categoria.module';
import { CardProdutosModule } from '../_shared/card-produtos/card-produtos.module';
import { AvisoModule } from '../_shared/aviso/aviso.module';
import { EditBannerModule } from '../_shared/edit-banner/edit-banner.module';
import { MpdvComponent } from './mpdv/mpdv.component';
import { BoxModule } from '../_shared/box/box.module';
import { FiltraPorTipoArquivoMpdv } from './mpdv/filtra-por-tipo-arquivo-mpdv.pipe';
import { ModalEnviarArquivoModule } from '../_shared/modal-enviar-arquivo/modal-enviar-arquivo.module';
import { ModalVisualizarImagemModule } from '../_shared/modal-visualizar-imagem/modal-visualizar-imagem.module';
import { ModalArquivoMpdvComponent } from './mpdv/modal-arquivo-mpdv/modal-arquivo-mpdv.component';
import { UploadFileModule } from '../_shared/upload-file/upload-file.module';
import { ShowIfAdminModule } from '../../_shared/directives/show-if-admin/show-if-admin.module';

@NgModule({
    declarations: [
        MerchandisingComponent,        
        LogosComponent,
        ElginUpComponent,
        MpdvComponent,
        FiltraPorTipoArquivoMpdv,
        ModalArquivoMpdvComponent
        
    ],
    exports: [MerchandisingComponent],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,

        BannerModule,
        AvisoModule,
        ButtonGradientModule,
        DescricaoCaminhoModule,
        TituloCategoriaModule,
        CardProdutosModule,
        EditBannerModule,
        NgxMasonryModule,
        BoxModule,
        ModalEnviarArquivoModule,
        ModalVisualizarImagemModule,
        UploadFileModule,
        ShowIfAdminModule
    ]
})
export class MerchandisingModule { }