import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { TabelaPrecoComponent } from './tabela-preco.component';
import { CardTabelaPrecoComponent } from './card-tabela-preco/card-tabela-preco.component';
import { ModalNovaTabelaComponent } from './modal-nova-tabela/modal-nova-tabela.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomInputModule } from '../_shared/custom-input/custom-input.module';
import { UploadFileMultipleModule } from '../_shared/upload-file-multiple/upload-file-multiple.module';
import { ModalEditarTabelaComponent } from './modal-editar-tabela/modal-editar-tabela.component';
import { ShowIfAdminModule } from '../../../app/_shared/directives/show-if-admin/show-if-admin.module';
import { ModalNovaPastaComponent } from './modal-nova-pasta/modal-nova-pasta.component';
import { ModalEditarPastaComponent } from './modal-editar-pasta/modal-editar-pasta.component';
import { ModalMoverItemComponent } from './modal-mover-item/modal-mover-item.component';

@NgModule({
    declarations: [
        TabelaPrecoComponent,
        CardTabelaPrecoComponent,
        ModalNovaTabelaComponent,
        ModalEditarTabelaComponent,
        ModalNovaPastaComponent,
        ModalEditarPastaComponent,
        ModalMoverItemComponent
    ],
    exports: [TabelaPrecoComponent],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,

        NgbModule.forRoot(),
        CustomInputModule,
        UploadFileMultipleModule,
        ShowIfAdminModule
    ]
})
export class TabelaPrecoModule { }