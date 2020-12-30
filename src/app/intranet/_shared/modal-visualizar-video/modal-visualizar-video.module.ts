import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { ModalVisualizarVideoComponent} from './modal-visualizar-video.component';

@NgModule({
    declarations: [
        ModalVisualizarVideoComponent,
    ],
    exports: [ModalVisualizarVideoComponent],
    imports: [
        CommonModule,
        RouterModule
    ]
})
export class ModalVisualizarVideoModule { }