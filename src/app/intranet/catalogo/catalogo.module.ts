import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { BoxModule } from '../_shared/box/box.module';
import { CatalogoComponent } from './catalogo.component';
import { AcoesCatalogoComponent } from './acoes-catalogo/acoes-catalogo.component';
import { FiltraProdutoSublinha } from './filtra-produto-sublinha.pipe';
import { FiltraArquivoProduto } from './filtra-arquivo-produto.pipe';
import { ModalArquivoCatalogoComponent } from './modal-arquivo-catalogo/modal-arquivo-catalogo.component';
import { UploadFileModule } from '../_shared/upload-file/upload-file.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShowIfAdminModule } from '../../../app/_shared/directives/show-if-admin/show-if-admin.module';
import { NgxMasonryModule } from 'ngx-masonry';
import { ModalEnviarArquivoModule } from '../_shared/modal-enviar-arquivo/modal-enviar-arquivo.module';
import { ModalVisualizarImagemModule } from '../_shared/modal-visualizar-imagem/modal-visualizar-imagem.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
    declarations: [
        CatalogoComponent,
        AcoesCatalogoComponent,
        FiltraProdutoSublinha,
        FiltraArquivoProduto,
        ModalArquivoCatalogoComponent
    ],
    exports: [CatalogoComponent],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,

        NgxMasonryModule,
        Ng2SearchPipeModule,

        NgbModule.forRoot(),
        BoxModule,
        UploadFileModule,
        ShowIfAdminModule,
        ModalEnviarArquivoModule,
        ModalVisualizarImagemModule
    ]
})
export class CatalogoModule { }