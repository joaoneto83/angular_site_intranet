import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Banner } from '../../_models/banner';
import { ActivatedRoute } from '@angular/router';
import { Video } from '../../_models/video';
import { SubLinha } from '../../_models/subLinha';
import { ModalBannerComponent } from '../modal-banner/modal-banner.component';
import { SiteAparelhoIdealComponent } from '../site-aparelho-ideal/site.aparelho.ideal.component';
import { TranslateService } from 'ng2-translate/src/translate.service';
import { LinhaService } from 'src/app/_shared/services/linha.service';
import { Produto } from 'src/app/_models/produto';

@Component({
  selector: 'app-site-automacao',
  templateUrl: './site-automacao.component.html',
  styleUrls: ['./site-automacao.component.css']
})
export class SiteAutomacaoComponent implements OnInit, AfterViewInit {

  banner: Banner[];
  banner2: Banner[];
  videos: Video[];
  sublinhas: SubLinha[];
  produtos: Produto[];

  @ViewChild(SiteAparelhoIdealComponent) aparelhoIdealComp:SiteAparelhoIdealComponent;

  @ViewChild(ModalBannerComponent) modalBanner:ModalBannerComponent;



  constructor(private activatedRoute: ActivatedRoute,
    private linhaService: LinhaService,
    private translate: TranslateService) { 
  
    
      
  }


  ngOnInit() {
    this.banner = this.activatedRoute.snapshot.data['banner'];
    this.banner2 = this.activatedRoute.snapshot.data['banner2'];
    this.videos = this.activatedRoute.snapshot.data['videos'];
    this.sublinhas = this.activatedRoute.snapshot.data['sublinhas'];
    this.abrirbanner() 
  }

  abrirbanner() {
    this.modalBanner.open();
}


  ngAfterViewInit(): void {
    this.activatedRoute.params.subscribe(routeParams => {
      var secao = this.activatedRoute.snapshot.params['secao'];

      if (secao) {
        var el = document.getElementById(secao);
        el.scrollIntoView(true);
        window.scrollBy(0, -100); // move o scroll para não esconder a seção atrás do menu
      }
    });
  }

}