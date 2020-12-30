import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UploadFileModule } from '../../_shared/upload-file/upload-file.module';
import { CustomInputModule } from '../../_shared/custom-input/custom-input.module';
import { NgxPaginationModule } from 'ngx-pagination';
import { TextMaskModule } from 'angular2-text-mask';
import { AdmAssistenciaComponent } from './adm-assistencia.component';
import { MatExpansionModule } from '@angular/material';
import { AdmAssistenciaEditComponent } from './adm-assistencia-edit/adm-assistencia-edit.component';
import { NgxMaskModule } from 'ngx-mask';
import { ModalTraducaoModule } from '../../_shared/modal-traducao/modal-traducao.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
    declarations: [
        AdmAssistenciaComponent,
        AdmAssistenciaEditComponent
    ],
    exports: [AdmAssistenciaComponent],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        ModalTraducaoModule,
        Ng2SearchPipeModule,
        
        UploadFileModule,
        CustomInputModule,
        NgxPaginationModule,
        TextMaskModule,
        MatExpansionModule,
        NgxMaskModule.forRoot(),
    ]
})
export class AdmAssistenciaModule { }