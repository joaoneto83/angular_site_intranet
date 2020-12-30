import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { EditBannerComponent } from './edit-banner.component';
import { MatExpansionModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { UploadFileModule } from '../upload-file/upload-file.module';
import { OrderModule } from 'ngx-order-pipe';
import { ColorPickerModule } from 'ngx-color-picker';

@NgModule({
    declarations: [
        EditBannerComponent,
    ],
    exports: [EditBannerComponent],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        MatExpansionModule,
        UploadFileModule,
        OrderModule,

        ColorPickerModule
    ]
})
export class EditBannerModule { }