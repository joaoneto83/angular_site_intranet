import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SiteAssistenciaComponent } from './site-assistencia.component';
import { OrderModule } from 'ngx-order-pipe';


@NgModule({
    declarations: [
        SiteAssistenciaComponent,
    ],
    exports: [SiteAssistenciaComponent],
    imports: [
        CommonModule,
        RouterModule,
        ReactiveFormsModule,
        OrderModule,
       
        FormsModule
    ]
})
export class SiteAssistenciaModule { }