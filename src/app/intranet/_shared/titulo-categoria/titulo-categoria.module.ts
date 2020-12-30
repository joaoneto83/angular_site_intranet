import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { TituloCategoriaComponent } from './titulo-categoria.component';

@NgModule({
    declarations: [
        TituloCategoriaComponent,
    ],
    exports: [TituloCategoriaComponent],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class TituloCategoriaModule { }