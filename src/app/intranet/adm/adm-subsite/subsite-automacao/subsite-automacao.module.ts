import { NgModule } from "@angular/core";
import { CommonModule, DatePipe } from "@angular/common";
import { RouterModule } from '@angular/router';
import { TituloSecoesProdutoModule } from '../../../_shared/titulo-secoes-produto/titulo-secoes-produto.module';
import { MatExpansionModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UploadFileModule } from '../../../_shared/upload-file/upload-file.module';
import { CustomInputModule } from '../../../_shared/custom-input/custom-input.module';
import { SubsiteAutomacaoComponent } from './subsite-automacao.component';

@NgModule({
    declarations: [
        SubsiteAutomacaoComponent
    ],
    exports: [SubsiteAutomacaoComponent],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,

        MatExpansionModule,

        TituloSecoesProdutoModule,
        UploadFileModule,
        CustomInputModule,
    ]
})
export class SubsiteAutomacaoModule { }