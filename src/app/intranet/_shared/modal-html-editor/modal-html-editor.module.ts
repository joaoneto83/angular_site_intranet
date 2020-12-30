import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalHtmlEditorComponent } from './modal-html-editor.component';
import { CKEditorModule } from 'ng2-ckeditor';

@NgModule({
    declarations: [
        ModalHtmlEditorComponent,
    ],
    exports: [ModalHtmlEditorComponent],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,
        CKEditorModule
    ] 
})
export class ModalHtmlEditorModule { }