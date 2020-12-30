import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { SiteFooterComponent } from './site.footer.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgxMasonryModule } from 'ngx-masonry';

@NgModule({
    declarations: [
        SiteFooterComponent
    ],
    exports: [SiteFooterComponent],
    imports: [
        CommonModule,
        RouterModule,
        NgxMasonryModule
    ]
})
export class SiteFooterModule { }