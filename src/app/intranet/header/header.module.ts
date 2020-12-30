import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header.component';
import { FiltraMenuPai } from './filtra-menu-pai.pipe';
import { FiltraMenuFilho } from './filtra-menu-filho.pipe';
import { SubMenuComponent } from './submenu/submenu.component';

@NgModule({
    declarations: [
        HeaderComponent,
        SubMenuComponent,
        FiltraMenuPai,
        FiltraMenuFilho,
    ],
    exports: [HeaderComponent],
    imports: [
        CommonModule,
        RouterModule,

        
    ]
})
export class HeaderModule { }