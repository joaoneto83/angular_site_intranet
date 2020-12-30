import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import {ModalBannerComponent} from './modal-banner.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
    declarations: [
        ModalBannerComponent,
    ],
    exports: [ModalBannerComponent],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,

    ]
})
export class ModalBannerModule  { }