import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import {  FormsModule } from '@angular/forms';
import { AdmArquivosComponent } from './adm-arquivos.component';
import { UploadFileModule } from '../../_shared/upload-file/upload-file.module';

@NgModule({
    declarations: [
        AdmArquivosComponent
    ],
    exports: [AdmArquivosComponent],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,

        UploadFileModule

    ]
})
export class AdmArquivosModule { }