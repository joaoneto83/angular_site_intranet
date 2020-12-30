import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { ListaLinksComponent } from './lista-links.component';
import { CardLinkComponent } from './card-link/card-link.component';

@NgModule({
    declarations: [
        ListaLinksComponent,
        CardLinkComponent
    ],
    exports: [ListaLinksComponent],
    imports: [
        CommonModule,
        RouterModule,

    ]
})
export class ListaLinksModule { }