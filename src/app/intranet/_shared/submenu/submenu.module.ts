import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { SubMenuComponent } from './submenu.component';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
    declarations: [
        SubMenuComponent,
    ],
    exports: [SubMenuComponent],
    imports: [
        CommonModule,
        RouterModule,

        OrderModule
    ]
})
export class SubMenuModule { }