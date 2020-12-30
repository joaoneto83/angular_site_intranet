import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { TituloSecoesProdutoModule } from '../../_shared/titulo-secoes-produto/titulo-secoes-produto.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdmUsuarioComponent } from './adm-usuario.component';
import { AdmUsuarioEditComponent } from './adm-usuario-edit/adm-usuario-edit.component';
import { UploadFileModule } from '../../_shared/upload-file/upload-file.module';
import { CustomInputModule } from '../../_shared/custom-input/custom-input.module';
import { TextMaskModule } from 'angular2-text-mask';
import { UploadAcceptFileModule } from '../../_shared/upload-accept-file/upload-accept-file.module';

@NgModule({
    declarations: [
        AdmUsuarioComponent,
        AdmUsuarioEditComponent
    ],
    exports: [AdmUsuarioComponent,AdmUsuarioEditComponent],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,

        TituloSecoesProdutoModule,
        UploadFileModule,
        UploadAcceptFileModule,
        CustomInputModule,
        TextMaskModule
    ]
})
export class AdmUsuarioModule { }