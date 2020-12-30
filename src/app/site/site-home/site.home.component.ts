import { Component, OnInit,ViewChild } from '@angular/core';
import { UtilService } from '../_shared/services/util.service';
import { ActivatedRoute } from '@angular/router';
import { Banner } from '../../../app/_models/banner';
import { ModalBannerComponent } from '../modal-banner/modal-banner.component';

@Component({
    selector: 'app-site-home',
    templateUrl: './site.home.component.html',
    styleUrls: ['./site.home.component.css']
  })
  export class SiteHomeComponent implements OnInit {

    banner: Banner[]
    banner2: Banner[]
    @ViewChild(ModalBannerComponent) modalBanner:ModalBannerComponent;
    constructor(
      private activatedRoute: ActivatedRoute,
      private utilService: UtilService) { }

    links: any[] = [];
    
    ngOnInit(): void {
      this.banner = this.activatedRoute.snapshot.data['banner'];
      this.banner2 = this.activatedRoute.snapshot.data['banner2'];
      this.links = this.utilService.retornaLinksServicos();
      this.abrirbanner() 
    }
    abrirbanner() {
      this.modalBanner.open();
  }
}
