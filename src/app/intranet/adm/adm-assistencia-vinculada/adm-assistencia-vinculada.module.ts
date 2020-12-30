import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UploadFileModule } from '../../_shared/upload-file/upload-file.module';
import { CustomInputModule } from '../../_shared/custom-input/custom-input.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { TextMaskModule } from 'angular2-text-mask';
import { AdmAssistenciaVinculadaComponent } from './adm-assistencia-vinculada.component';
import { AdmAssistenciaVinculadaEditComponent } from './adm-assistencia-vinculada-edit/adm-assistencia-vinculada-edit.component';
import { MatExpansionModule } from '@angular/material';

@NgModule({
    declarations: [
        AdmAssistenciaVinculadaComponent,
        AdmAssistenciaVinculadaEditComponent
    ],
    exports: [AdmAssistenciaVinculadaComponent],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        
        UploadFileModule,
        CustomInputModule,
        NgxPaginationModule,
        TextMaskModule,
        MatExpansionModule
    ]
})
export class AdmAssistenciaVinculadaModule { }