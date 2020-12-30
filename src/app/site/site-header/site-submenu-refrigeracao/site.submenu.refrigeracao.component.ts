import { Component, Input, OnInit, ElementRef } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { SubLinha } from '../../../_models/subLinha';
import { TranslateService } from 'ng2-translate';
import { TraducaoService } from '../../_shared/services/traducao.service';

@Component({
  selector: 'app-site-submenu-refrigeracao',
  templateUrl: './site.submenu.refrigeracao.component.html',
  styleUrls: ['./site.submenu.refrigeracao.component.css']
})
export class SiteSubMenuRefrigeracaoComponent implements OnInit {

  @Input()
  link: string;

  showMenuClick: boolean = false;
  sublinhas: SubLinha[];
  idioma: string = 'pt';
  

  constructor(private el: ElementRef,
    private activatedRoute: ActivatedRoute,
    private translate: TranslateService,
    private traducaoService: TraducaoService,
    private router: Router) {

    translate.setDefaultLang('pt');
  }

  ngOnInit(): void {
    this.idioma = this.traducaoService.getIdioma().toString();
    this.translate.use(this.idioma);
    this.sublinhas = this.activatedRoute.snapshot.data['sublinhasRefrigeracao'];
  }

  removeClasse() {
    let tag = this.el.nativeElement.querySelector("ul.active-link");
    if (tag !== null && tag !== undefined) {
      tag.classList.remove('active-link');
    }
  }

  adicionaClasse(elemento) {
    let elementoSubMenu = elemento.parentElement.parentElement.parentElement;
    elementoSubMenu.classList.add('active-link');
  }

  changeLanguage() {
    this.traducaoService.setIdioma(this.idioma);
    this.translate.use(this.idioma);

    window.location.reload();
  }
}