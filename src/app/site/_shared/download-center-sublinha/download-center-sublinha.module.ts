import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MatExpansionModule, MatIcon, MatIconModule } from '@angular/material';
import { AppPipeModule } from '../../../_shared/pipe/app-pipe.module';
import { DownloadCenterSublinhaComponent } from './download-center-sublinha.component';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';
import { Http } from '@angular/http';
import { OrderModule } from 'ngx-order-pipe';

@NgModule({
    declarations: [
        DownloadCenterSublinhaComponent
    ],
    exports: [DownloadCenterSublinhaComponent],
    imports: [
        CommonModule,
        OrderModule,
        RouterModule,
        
        AppPipeModule,
        TranslateModule.forRoot({
            provide: TranslateLoader,
            useFactory: (http: Http) => new TranslateStaticLoader(http, './assets/locale', '.json'),
            deps: [Http]
        })
    ]
})
export class DownloadCenterSublinhaModule { }