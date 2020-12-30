import { Component, AfterViewInit, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Banner } from '../../_models/banner';
import { GrupoDestaque } from '../../_models/grupoDestaque';
import { Video } from '../../_models/video';
import { VideoService } from '../../_shared/services/video.service';
import { Linha } from '../../_models/linha';
import { TranslateService } from 'ng2-translate';
import { SubLinha } from '../../_models/subLinha';
import { TraducaoService } from '../_shared/services/traducao.service';

@Component({
  selector: 'app-site-refrigeracao',
  templateUrl: './site-refrigeracao.component.html',
  styleUrls: ['./site-refrigeracao.component.css']
})
export class SiteRefrigeracaoComponent implements OnInit, AfterViewInit {

  banner: Banner[];
  banner2: Banner[];
  gruposDestaqueHome: GrupoDestaque[];
  videos: Video[];
  sublinhas: SubLinha[];

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private serviceVideo: VideoService,
    private translate: TranslateService,
    private traducao: TraducaoService) {

    translate.addLangs(['pt', 'en', 'es']);
    translate.setDefaultLang('pt');
  }

  ngOnInit() {
    this.banner = this.activatedRoute.snapshot.data['banner'];
    this.banner2 = this.activatedRoute.snapshot.data['banner2'];
    this.gruposDestaqueHome = this.activatedRoute.snapshot.data['gruposDestaqueHome'];
    this.videos = this.activatedRoute.snapshot.data['videos'];
    this.sublinhas = this.activatedRoute.snapshot.data['sublinhas'];

    this.translate.use(this.traducao.getIdioma());
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