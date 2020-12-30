import { Component, OnInit, Input, OnChanges, SimpleChanges, ɵConsole, ViewChild } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';
import { EditBannerComponent } from '../edit-banner/edit-banner.component';
import { Banner } from '../../../../app/_models/banner';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

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

  @ViewChild('editBanner')
  editBanner: EditBannerComponent;

  constructor(config: NgbCarouselConfig, private router: Router) {
    config.showNavigationArrows = false;
    config.showNavigationIndicators = true;
    config.interval = 10000;
  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  editar() {
    this.editBanner.open();
  }

  atualiza($event: Banner[])
  {
    this.banners = [...$event];
  }
}
