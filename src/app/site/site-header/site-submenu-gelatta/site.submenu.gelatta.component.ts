import { Component, OnInit, Input, OnChanges, SimpleChanges, ElementRef } from '@angular/core';
import { Classificacao } from '../../../../app/intranet/_models/classificacao';
import { Linha } from '../../../../app/_models/linha';
import { SubLinhaService } from '../../../../app/_shared/services/subLinha.service';
import { SubLinha } from '../../../../app/_models/subLinha';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../../../_models/produto';

@Component({
  selector: 'app-site-submenu-gelatta',
  templateUrl: './site.submenu.gelatta.component.html',
  styleUrls: ['./site.submenu.gelatta.component.css']
})
export class SiteSubMenuGelattaComponent implements OnInit, OnChanges {

  @Input()
  link: string;
  
  showMenuClick: boolean = false;
  produtos: Produto[];
  sublinhas: SubLinha[];

  constructor(private el: ElementRef, private sublinhaService: SubLinhaService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.sublinhas = this.activatedRoute.snapshot.data['sublinhasGelatta'];
    this.produtos = this.activatedRoute.snapshot.data['produtos'];
    
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
}