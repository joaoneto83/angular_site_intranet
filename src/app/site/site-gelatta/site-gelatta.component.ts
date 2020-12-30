import { Component, OnInit, AfterViewInit, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Banner } from '../../_models/banner';
import { Options } from 'ng5-slider';
import * as $ from 'jquery';
import { UtilService } from '../_shared/services/util.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-site-gelatta',
  templateUrl: './site-gelatta.component.html',
  styleUrls: ['./site-gelatta.component.css']
})
export class SiteGelattaComponent implements OnInit, AfterViewInit {

  banner: Banner[];
  banner2: Banner[];
  perguntasFrequentes: any[];
  isBrowser: boolean

  constructor(private activatedRoute: ActivatedRoute, private router: Router, @Inject(PLATFORM_ID) private platformId) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit() {

    this.banner = this.activatedRoute.snapshot.data['banner'];
    this.banner2 = this.activatedRoute.snapshot.data['banner2'];
    this.perguntasFrequentes = this.activatedRoute.snapshot.data['perguntas'];
  }

  ngAfterViewInit(): void {
    var secao = this.activatedRoute.snapshot.params['secao'];

    if (secao) {
      var el = document.getElementById(secao);
      el.scrollIntoView(true);
      window.scrollBy(0, -100); // move o scroll para não esconder a seção atrás do menu

    }
  }

  alterarIcone(id: string) {
    let element = $('#btn' + id);

    if (element[0].className.includes('fa-plus')) {
      element[0].classList.remove('fa-plus');
      element[0].classList.add('fa-minus');
    }
    else {
      element[0].classList.remove('fa-minus');
      element[0].classList.add('fa-plus');
    }
  }

}
