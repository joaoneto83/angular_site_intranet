import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatExpansionModule, MatIcon, MatIconModule } from '@angular/material';
import { DownloadCenterComponent } from './download-center.component';
import { AppPipeModule } from '../../../_shared/pipe/app-pipe.module';
import { OrderModule } from 'ngx-order-pipe';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
    declarations: [
        DownloadCenterComponent
    ],
    exports: [DownloadCenterComponent],
    imports: [
        CommonModule,
        RouterModule,
        OrderModule,
        Ng2SearchPipeModule,
        AppPipeModule
    ]
})
export class DownloadCenterModule { }