import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Linha } from '../_models/linha';
import { SubLinha } from '../_models/subLinha';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-site-root',
  templateUrl: './site.component.html',
  styleUrls: ['./site.component.css']
})
export class SiteComponent implements OnInit {

  title = 'elgin-site';

  linhas: Linha[];
  linhasFooter: Linha[];
  sublinhas: SubLinha[];

  headerAutomacao: boolean;
  headerGelatta: boolean;
  headerRefrigeracao: boolean;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, @Inject(PLATFORM_ID) private platformId: Object) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.headerAutomacao = event.url.includes('Automacao');
      }
      if (event instanceof NavigationEnd) {
        this.headerGelatta = event.url.includes('Gelatta') || event.url.includes('MaquinaSorvete');
      }
      if (event instanceof NavigationEnd) {
        this.headerRefrigeracao = event.url.includes('Refrigeracao');
      }
      if (event instanceof NavigationEnd) {
        this.headerRefrigeracao = event.url.includes('refrigeracao');
      }
    });
  }

  ngOnInit(): void {
    this.linhas = this.activatedRoute.snapshot.data['linhasSemMenusEspeciais'];
    this.linhasFooter = this.activatedRoute.snapshot.data['linhas'];
    this.sublinhas = this.activatedRoute.snapshot.data['sublinhasAutomacao'];
  }

  onActivate(event) {
    if (isPlatformBrowser(this.platformId)) {
      window.scroll(0, 0);
    }
  }
}
