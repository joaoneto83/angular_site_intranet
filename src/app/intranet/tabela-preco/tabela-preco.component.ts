import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { TabelaPreco } from './tabela-preco';
import { HeaderService } from '../header/header.service';
import { ActivatedRoute } from '@angular/router';
import { TabelaPrecoService } from './tabelaPreco.service';
import Swal from 'sweetalert2';
import { ResponseTabelaPreco } from './response-tabela-preco';
import { PastaTabelaPreco } from './pasta-tabela-preco';

@Component({
  selector: 'app-tabela-preco',
  templateUrl: './tabela-preco.component.html',
  styleUrls: ['./tabela-preco.component.css']
})
export class TabelaPrecoComponent implements OnInit {

  response: ResponseTabelaPreco = { pastas: [] as PastaTabelaPreco[], tabelaPrecos: [] as TabelaPreco[] } as ResponseTabelaPreco;
  rows: any[] = [];
  guidEmpty = '00000000-0000-0000-0000-000000000000';
  id: string;

  constructor(private headerService: HeaderService,
    private service: TabelaPrecoService,
    private activatedRoute: ActivatedRoute) {
    this.headerService.menuAtivo('TabPreco');
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(routeParams => {
      this.response = this.activatedRoute.snapshot.data['response'];
      this.id = this.activatedRoute.snapshot.params['id'];
    });
  }

  retornaCarregamento($event) {

    if (!this.id)
      this.service.getPastaTabelaPrecoRaiz().subscribe(
        res => this.getTabelasPrecoSuccess(res),
        err => this.getTabelasPrecoError(err)
      );
    else
      this.service.getPastaTabelaPreco(this.id).subscribe(
        res => this.getTabelasPrecoSuccess(res),
        err => this.getTabelasPrecoError(err)
      );

  }

  getTabelasPrecoSuccess(res): void {
    this.response = res;
  }

  getTabelasPrecoError(err: any): void {
    console.log(err);
    Swal.fire('Erro', 'Erro ao recarregar Tabelas. Recarregue a página', 'error');
  }

  get logado(): boolean {
    return true;
  }
}
