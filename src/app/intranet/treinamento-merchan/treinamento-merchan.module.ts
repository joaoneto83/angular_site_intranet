import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CustomInputModule } from '../_shared/custom-input/custom-input.module';
import { UploadFileMultipleModule } from '../_shared/upload-file-multiple/upload-file-multiple.module';
import { ShowIfAdminModule } from '../../_shared/directives/show-if-admin/show-if-admin.module';
import { ModalNovaPastaComponent } from './modal-nova-pasta/modal-nova-pasta.component';
import { ModalMoverItemComponent } from './modal-mover-item/modal-mover-item.component';
import { TreinamentoMerchanComponent } from './treinamento-merchan.component';
import { ModalNovoTreinamentoComponent } from './modal-novo-treinamento/modal-novo-treinamento.component';
import { CardTreinamentoMerchanComponent } from './card-treinamento-merchan/card-treinamento-merchan.component';
import { ModalEditarPastaComponent } from './modal-editar-pasta/modal-editar-pasta.component';
import { ModalEditarTreinamentoComponent } from './modal-editar-treinamento/modal-editar-treinamento.component';

@NgModule({
    declarations: [
        TreinamentoMerchanComponent,
        CardTreinamentoMerchanComponent,
        ModalNovoTreinamentoComponent,
        ModalNovoTreinamentoComponent,
        ModalNovaPastaComponent,
        ModalMoverItemComponent,
        ModalEditarPastaComponent,
        ModalEditarTreinamentoComponent
    ],
    exports: [TreinamentoMerchanComponent],
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
export class TreinamentoMerchanModule { }