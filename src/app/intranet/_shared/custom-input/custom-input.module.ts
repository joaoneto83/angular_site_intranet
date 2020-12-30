import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { CustomInputComponent } from './custom-input.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        CustomInputComponent,
    ],
    exports: [CustomInputComponent],
    imports: [
        CommonModule,
        RouterModule,
        NgbModule
    ]
})
export class CustomInputModule { }