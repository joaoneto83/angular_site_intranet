import { Component, OnInit, OnChanges, SimpleChanges, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SubLinha } from '../../../../app/_models/subLinha';

@Component({
  selector: 'app-site-submenu-automacao',
  templateUrl: './site.submenu.automacao.component.html',
  styleUrls: ['./site.submenu.automacao.component.css']
})
export class SiteSubMenuAutomacaoComponent implements OnInit, OnChanges {

  showMenuClick: boolean = false;
  sublinhas: SubLinha[];

  constructor(private el: ElementRef, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.sublinhas = this.activatedRoute.snapshot.data['sublinhasAutomacao'];
  }

  getSubLinhasSuccess(res: SubLinha[]): void {
    this.sublinhas = res;
  }

  getSubLinhasError(err): void {
    console.log('Erro ao obter sublinhas de Automacao: ');
    console.log(err);
  }


  ngOnChanges(changes: SimpleChanges): void {
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

  fecharClickVendas(targetId) {
    if (targetId != 'btnClick')
      this.showMenuClick = false;
  }
}