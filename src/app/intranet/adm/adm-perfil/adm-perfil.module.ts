import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { AdmPerfilComponent } from './adm-perfil.component';
import { AdmPerfilEditComponent } from './adm-pefil-edit/adm-perfil-edit.component';
import { TituloSecoesProdutoModule } from '../../_shared/titulo-secoes-produto/titulo-secoes-produto.module';
import { MatExpansionModule } from '@angular/material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        AdmPerfilComponent,
        AdmPerfilEditComponent
    ],
    exports: [AdmPerfilComponent],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        ReactiveFormsModule,

        MatExpansionModule,

        TituloSecoesProdutoModule
    ]
})
export class AdmPerfilModule { }