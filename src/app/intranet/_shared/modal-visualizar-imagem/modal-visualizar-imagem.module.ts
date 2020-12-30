import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import {ModalVisualizarImagemComponent} from './modal-visualizar-imagem.component';
import { CustomInputModule } from '../custom-input/custom-input.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ModalVisualizarImagemComponent,
    ],
    exports: [ModalVisualizarImagemComponent],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        CustomInputModule,
    ]
})
export class ModalVisualizarImagemModule { }