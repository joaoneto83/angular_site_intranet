import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { BoxComponent } from './box.component';

@NgModule({
    declarations: [
        BoxComponent
    ],
    exports: [BoxComponent],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class BoxModule { }