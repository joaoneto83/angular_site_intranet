import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { UploadFileMultipleComponent } from './upload.file.multiple.component';

@NgModule({
    declarations: [
        UploadFileMultipleComponent
    ],
    exports: [UploadFileMultipleComponent],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class UploadFileMultipleModule { }