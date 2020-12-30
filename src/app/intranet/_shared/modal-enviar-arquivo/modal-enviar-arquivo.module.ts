import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { ModalEnviarArquivoComponent } from './modal-enviar-arquivo.component';
import { CustomInputModule } from '../custom-input/custom-input.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ModalEnviarArquivoComponent,
    ],
    exports: [ModalEnviarArquivoComponent],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        CustomInputModule,
    ]
})
export class ModalEnviarArquivoModule { }