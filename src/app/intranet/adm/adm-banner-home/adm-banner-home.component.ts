import { OnInit, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LoadingService } from '../../../../app/_shared/services/loading.service';
import { HeaderService } from '../../header/header.service';
import { Banner } from '../../../_models/banner';

@Component({
    selector: 'app-adm-banner-home',
    templateUrl: 'adm-banner-home.component.html',
    styleUrls: ['adm-banner-home.component.css']
})
export class AdmBannerHomeComponent implements OnInit{

    banners: Banner[];
    banners2: Banner[];

    constructor(private activatedRoute: ActivatedRoute,
                private loadingService: LoadingService,
                private headerService: HeaderService) {
                this.headerService.menuAtivo('Adm');
            }

    ngOnInit(): void {
        this.banners = this.activatedRoute.snapshot.data['banners'];
        this.banners2 = this.activatedRoute.snapshot.data['banners2'];

        for(var i = 0; i < this.banners.length; i++)
        {
            this.banners[i].caminho2 = this.banners2[i].caminho;
        }
    }
}
