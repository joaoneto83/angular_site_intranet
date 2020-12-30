import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { ConfigComponent } from './config.component';
import { FormsModule } from '@angular/forms';

@NgModule({
    declarations: [
        ConfigComponent
    ],
    exports: [ConfigComponent],
    imports: [
        CommonModule,
        RouterModule,
        FormsModule
    ]
})
export class ConfigModule { }