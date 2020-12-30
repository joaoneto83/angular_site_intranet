import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from '@angular/router';
import { BannerComponent } from './banner.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EditBannerModule } from '../edit-banner/edit-banner.module';
import { FiltraBannerAtivo } from './filtra-banner-ativo.pipe';
import { ShowIfAdminModule } from '../../../../app/_shared/directives/show-if-admin/show-if-admin.module';

@NgModule({
    declarations: [
        BannerComponent,
        FiltraBannerAtivo
    ],
    exports: [BannerComponent],
    imports: [
        CommonModule,
        RouterModule,
        ShowIfAdminModule,

        EditBannerModule,

        NgbModule.forRoot(),
    ]
})
export class BannerModule { }