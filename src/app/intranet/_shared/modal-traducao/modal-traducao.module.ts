import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { ModalTraducaoComponent} from './modal-traducao.component';
import { CustomInputModule } from '../custom-input/custom-input.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalHtmlEditorModule } from '../modal-html-editor/modal-html-editor.module';

@NgModule({
    declarations: [
        ModalTraducaoComponent,
    ],
    exports: [ModalTraducaoComponent],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        
        CustomInputModule,
        ModalHtmlEditorModule
    ]
})
export class ModalTraducaoModule { }