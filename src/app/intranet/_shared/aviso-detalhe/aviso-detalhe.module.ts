import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { BoxModule } from '../box/box.module';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';
import { AvisoDetalheComponent } from './aviso-detalhe.component';

@NgModule({
    declarations: [
        AvisoDetalheComponent
    ],
    exports: [AvisoDetalheComponent],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        CKEditorModule,
        BoxModule
    ]
})
export class AvisoDetalheModule { }