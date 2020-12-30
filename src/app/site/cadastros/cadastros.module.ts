import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';

import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TextMaskModule } from 'angular2-text-mask';
import { UploadAcceptFileModule } from 'src/app/intranet/_shared/upload-accept-file/upload-accept-file.module';
import { CustomInputModule } from 'src/app/intranet/_shared/custom-input/custom-input.module';
import { UploadFileModule } from 'src/app/intranet/_shared/upload-file/upload-file.module';
import { TituloSecoesProdutoModule } from 'src/app/intranet/_shared/titulo-secoes-produto/titulo-secoes-produto.module';
import { CadastrosComponent } from './cadastros.component';
import { CriaUsuarioComponent } from './adm-usuario-edit/adm-usuario-edit.component';



@NgModule({
    declarations: [
        CadastrosComponent,        CriaUsuarioComponent
    ],
    exports: [CadastrosComponent,        CriaUsuarioComponent ],
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
export class CadastrosModule { }