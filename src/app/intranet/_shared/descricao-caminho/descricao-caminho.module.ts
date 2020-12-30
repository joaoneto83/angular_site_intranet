import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { DescricaoCaminhoComponent } from './descricao-caminho.component';

@NgModule({
    declarations: [
        DescricaoCaminhoComponent,
    ],
    exports: [DescricaoCaminhoComponent],
    imports: [
        CommonModule,
        RouterModule,
    ]
})
export class DescricaoCaminhoModule { }