import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { UploadAcceptFileComponent } from './upload-accept-file.component';

@NgModule({
    declarations: [
        UploadAcceptFileComponent
    ],
    exports: [UploadAcceptFileComponent],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class UploadAcceptFileModule { }