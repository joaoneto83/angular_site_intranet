import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { TituloSecoesProdutoComponent } from './titulo-secoes-produto.component';

@NgModule({
    declarations: [
        TituloSecoesProdutoComponent,
    ],
    exports: [TituloSecoesProdutoComponent],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class TituloSecoesProdutoModule { }