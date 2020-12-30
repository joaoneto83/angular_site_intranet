import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { SiteBannerComponent } from './site-banner.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
    declarations: [
        SiteBannerComponent
    ],
    exports: [SiteBannerComponent],
    imports: [
        CommonModule,
        RouterModule,

        NgbModule.forRoot(),
    ]
})
export class SiteBannerModule { }