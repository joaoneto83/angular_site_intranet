import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { ButtonGradientComponent } from './button-gradient.component';

@NgModule({
    declarations: [
        ButtonGradientComponent
    ],
    exports: [ButtonGradientComponent],
    imports: [
        CommonModule,
        RouterModule,
    ]
})
export class ButtonGradientModule { }