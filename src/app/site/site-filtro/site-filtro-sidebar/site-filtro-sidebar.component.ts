import { Component, Input, Output, EventEmitter, ViewChildren, QueryList, ElementRef, OnInit } from '@angular/core';
import { Classificacao } from '../../../../app/_models/classificacao';
import * as $ from 'jquery';

@Component({
  selector: 'app-sidebar',
  templateUrl: './site-filtro-sidebar.component.html',
  styleUrls: ['./site-filtro-sidebar.component.css']
})
export class SiteFiltroSidebarComponent {

  @Input()
  titulo: string;

  @Output()
  idsFiltrosSelecionados = new EventEmitter<string[]>();

  @Output()
  clickAparelhoIdeal = new EventEmitter<null>();

  @Input()
  filtros: Classificacao[];

  @Input()
  filtros2: Classificacao[];

  @Input()
  mostraAparelhoIdeal: boolean;

  idsClassificacoesFiltrar: string[] = [];
  
  @Output()
  filter = new EventEmitter<string[]>();
 
  @Output()
  filter0: number = 0;

  @ViewChildren("checkboxes") checkboxes: QueryList<ElementRef>;

  uncheckAll() {
    this.checkboxes.forEach((element) => {
      element.nativeElement.checked = false;
    });
    this.idsClassificacoesFiltrar.splice(0);
    this.idsFiltrosSelecionados.emit(this.idsClassificacoesFiltrar);

    this.limparFiltroPilhas();
  }

  limparFiltroPilhas() {
    this.filtros.forEach((element) => {
      element.filhos.forEach((subfiltros) => {
        this.desselecionarImagem(subfiltros.id);
      });
    });
  }

  desselecionarImagem(id: string) {
    let src = $('#img-' + id).attr('src');
   
    if (src) {
      if (src.includes('_on')) {
        src = src.replace('_on', '_icon');
        $('#img-' + id).attr('src', src);
      }
    }
  }

  atualizaListaFiltro(idClassificacao, checked: boolean) {

    if (checked) {
      // this.idsClassificacoesFiltrar.push(idClassificacao);
  
    // } else {
    //   let index = this.idsClassificacoesFiltrar.indexOf(idClassificacao);
    //   this.idsClassificacoesFiltrar.splice(index, 1);
    }
    this.idsClassificacoesFiltrar.push(idClassificacao);
    this.idsFiltrosSelecionados.emit(this.idsClassificacoesFiltrar);

    let index = this.idsClassificacoesFiltrar.indexOf(idClassificacao);
    this.idsClassificacoesFiltrar.splice(index, 1);

  }

  abreAparelhoIdeal() {
    this.clickAparelhoIdeal.emit();
  }

  selecionaImagem(id: string) {
    let src = $('#img-' + id).attr('src');
    console.log("icone",id);
    if (src.includes('_icon')) {
      src = src.replace('_icon', '_on');
      $('#img-' + id).attr('src', src);
    }
    else if (src.includes('_on')) {
      src = src.replace('_on', '_icon');
      $('#img-' + id).attr('src', src);
    }
  }
}