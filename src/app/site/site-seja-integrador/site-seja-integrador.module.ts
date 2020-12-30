import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { SiteSejaIntegradorComponent } from './site-seja-integrador.component';
import { SiteCustomInputModule } from '../_shared/site-custom-input/site-custom-input.module';
import { AgendaTreinamentoComponent } from './agenda-treinamento/agenda-treinamento.component';

@NgModule({
    declarations: [
        SiteSejaIntegradorComponent,
        AgendaTreinamentoComponent
    ],
    exports: [SiteSejaIntegradorComponent],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,
        SiteCustomInputModule
    ]
})
export class SiteSejaIntegradorModule { }