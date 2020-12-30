import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { BoxModule } from '../box/box.module';
import { AvisoComponent } from './aviso.component';
import { FiltraPorTipoAviso } from './filtra-por-tipo-aviso.pipe';
import { EditAvisoComponent } from './edit-aviso/edit-aviso.component';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ng2-ckeditor';
import { ShowIfAdminModule } from '../../../_shared/directives/show-if-admin/show-if-admin.module';

@NgModule({
    declarations: [
        AvisoComponent,
        FiltraPorTipoAviso,
        EditAvisoComponent
    ],
    exports: [AvisoComponent],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        CKEditorModule,
        BoxModule,
        ShowIfAdminModule
    ]
})
export class AvisoModule { }