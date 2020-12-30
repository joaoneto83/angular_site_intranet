import { Component, OnInit, Input, OnChanges, SimpleChanges, ɵConsole, ViewChild } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { EditBannerComponent } from '../../intranet/_shared/edit-banner/edit-banner.component';
import { Banner } from '../../_models/banner';

@Component({
  selector: 'app-banner-home',
  templateUrl: './banner-home.component.html',
  styleUrls: ['./banner-home.component.css']
})
export class BannerHomeComponent implements OnInit {

  @Input()
  codigoBanner: string;

  @Input()
  perfil: string;

  @Input()
  itens: any[];

  @Input()
  imagens: any[];

  @Input()
  banners: Banner[];

  @Input()
  banners2: Banner[];

  @Input()
  podeEditar: boolean;

  @Input()
  traduzir: boolean;

  @ViewChild('editBanner')
  editBanner: EditBannerComponent;

  @ViewChild('editBanner2')
  editBanner2: EditBannerComponent;

  constructor(config: NgbCarouselConfig, private router: Router) {
    config.showNavigationArrows = false;
    config.showNavigationIndicators = false;
    config.interval = 10000;
    }

  ngOnInit(): void {

      for(var i = 0; i < this.banners.length; i++)
      {
        if(this.banners2[i])
          this.banners[i].caminho2 = this.banners2[i].caminho;
      }

  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  editar() {
    this.editBanner.open();
  }

  editar2() {
    this.editBanner2.open();
  }

  atualiza($event: Banner[])
  {
    this.banners = [...$event];
  }

  atualiza2($event: Banner[]) {
    this.banners2 = [...$event];
  }

}
