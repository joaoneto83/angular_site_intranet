import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { OrderModule } from 'ngx-order-pipe';
import { AnimateModule } from '../../_shared/animate-component/animate.module';
import { FormsModule } from '@angular/forms';
import { SiteBuscaProdutoComponent } from './site-busca-produto.component';

@NgModule({
    declarations: [
        SiteBuscaProdutoComponent
    ],
    exports: [SiteBuscaProdutoComponent],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule,
        AnimateModule,
        OrderModule,
    ]
})
export class SiteBuscaProdutoModule { }