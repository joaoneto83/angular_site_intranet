import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AnimateComponent } from './animate.component';

@NgModule({
    declarations: [
        AnimateComponent
    ],
    exports: [AnimateComponent],
    imports: [
        CommonModule,
    ]
})
export class AnimateModule { }