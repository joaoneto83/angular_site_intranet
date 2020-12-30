import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SiteSejaAssistenciaTecnicaComponent } from './site-seja-assistencia-tecnica';
import { RouterModule } from '@angular/router';
import { SiteCustomInputModule } from '../_shared/site-custom-input/site-custom-input.module';

@NgModule({
    declarations: [
        SiteSejaAssistenciaTecnicaComponent,
    ],
    exports: [SiteSejaAssistenciaTecnicaComponent],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        FormsModule,

        SiteCustomInputModule
    ]
})
export class SiteSejaAssistenciaModule {

 }