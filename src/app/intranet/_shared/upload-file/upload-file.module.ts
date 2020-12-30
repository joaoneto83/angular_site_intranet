import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { UploadFileComponent } from './upload.file.component';

@NgModule({
    declarations: [
        UploadFileComponent
    ],
    exports: [UploadFileComponent],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class UploadFileModule { }