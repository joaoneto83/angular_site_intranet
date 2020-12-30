import { NgModule } from "@angular/core";
import { CommonModule, DatePipe } from "@angular/common";
import { RouterModule } from '@angular/router';
import { TituloSecoesProdutoModule } from '../../../_shared/titulo-secoes-produto/titulo-secoes-produto.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UploadFileModule } from '../../../_shared/upload-file/upload-file.module';
import { CustomInputModule } from '../../../_shared/custom-input/custom-input.module';
import { SubsiteSolarEditComponent } from './subsite-solar-edit/subsite-solar-edit.component';
import { SubsiteSolarComponent } from './subsite-solar.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { TextMaskModule } from 'angular2-text-mask';

@NgModule({
    declarations: [
        SubsiteSolarComponent,
        SubsiteSolarEditComponent
    ],
    exports: [SubsiteSolarComponent],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,

        TituloSecoesProdutoModule,
        UploadFileModule,
        CustomInputModule,
        NgxPaginationModule,
        TextMaskModule
    ],
    providers: [
        DatePipe
    ]
})
export class SubsiteSolarModule { }