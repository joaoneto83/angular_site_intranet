import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Logo } from '../../../../app/intranet/_models/logo';
import { ActivatedRoute } from '@angular/router';
import { UtilService } from '../../../../app/intranet/_shared/services/util.services';
import { Icone } from '../../../../app/intranet/_models/icone';

@Component({
  selector: 'app-logos',
  templateUrl: './logos.component.html',
  styleUrls: ['./logos.component.css']
})
export class LogosComponent implements OnInit, OnChanges {

  constructor(private activatedRoute: ActivatedRoute, private utilService: UtilService) { }

  @Input()
  logos: Logo[];
  icones: Icone[];
  imagens: any[] = [];
  rows: any[] = [];
  abaSelecionada: string;
  tituloPagina: string;

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(routeParams => {
      this.abaSelecionada = this.activatedRoute.snapshot.params['tipo'];

      if (this.abaSelecionada == undefined) {
        this.abaSelecionada = "logo";
      }
      this.rows = this.groupColumns(this.abaSelecionada.toLowerCase());
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  groupColumns(aba: string) {
    let conteudo = this.alterarAbaSelecionada(aba);
    
    const newRows = [];

    for (let index = 0; index < conteudo.length; index += 4) {
      newRows.push(conteudo.slice(index, index + 4));
    }

    return newRows;
  }

  alterarAbaSelecionada(aba: string) {
    let conteudo = this.carregarConteudo(aba);

    this.abaSelecionada = aba;
    if (aba == 'logo')
      this.tituloPagina = 'Logotipos';
    else if (aba == 'icone')
      this.tituloPagina = 'Ícones'

    return conteudo;
  }

  carregarConteudo(aba: string) {
    if (aba == 'logo') {
      this.imagens = this.utilService.retornaLogos();
      return this.imagens;
    }
    else if (aba == 'icone') {
      this.imagens = this.utilService.retornaIcones();
      return this.imagens;
    }
  }
}