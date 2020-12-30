import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { HeaderService } from '../header/header.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { PastaTreinamentoMerchan } from './pasta-treinamento-merchan';
import { ResponseTreinamentoMerchan } from './response-treinamento-merchan';
import { TreinamentoMerchan } from './teinamento-merchan';
import { TreinamentoMerchanService } from './treinamentoMerchan.service';

@Component({
  selector: 'app-treinamento-merchan',
  templateUrl: './treinamento-merchan.component.html',
  styleUrls: ['./treinamento-merchan.component.css']
})
export class TreinamentoMerchanComponent implements OnInit {

  response: ResponseTreinamentoMerchan = { pastas: [] as PastaTreinamentoMerchan[], treinamentos: [] as TreinamentoMerchan[] } as ResponseTreinamentoMerchan;
  rows: any[] = [];
  guidEmpty = '00000000-0000-0000-0000-000000000000';
  id: string;

  constructor(private headerService: HeaderService,
    private service: TreinamentoMerchanService,
    private activatedRoute: ActivatedRoute) {
    this.headerService.menuAtivo('Merchan');
  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(routeParams => {
      this.response = this.activatedRoute.snapshot.data['response'];
      this.id = this.activatedRoute.snapshot.params['id'];
    });
  }

  retornaCarregamento($event) {

    if (!this.id)
      this.service.getPastaTreinamentoRaiz().subscribe(
        res => this.getSuccess(res),
        err => this.getError(err)
      );
    else
      this.service.getPastaTreinamentoMerchan(this.id).subscribe(
        res => this.getSuccess(res),
        err => this.getError(err)
      );

  }

  getSuccess(res): void {
    this.response = res;
  }

  getError(err: any): void {
    console.log(err);
    Swal.fire('Erro', 'Erro ao recarregar Treinamentos. Recarregue a página', 'error');
  }

  get logado(): boolean {
    return true;
  }
}
