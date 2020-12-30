import { Component, OnInit } from '@angular/core';
import { Prova } from '../../../_models/prova-oficial';
import { ActivatedRoute, Router, ActivatedRouteSnapshot } from '@angular/router';
import { HeaderService } from '../../../header/header.service';
import { ProvaService } from '../prova.service';
import { LoadingService } from '../../../../_shared/services/loading.service';
import { AgendamentoUsuario } from '../../../../../app/intranet/_models/agendamentoUsuario';
import { TokenService } from '../../../../../app/_core/services/token.service';
import Swal from 'sweetalert2';
import { timer } from 'rxjs/internal/observable/timer';

@Component({
  selector: 'app-prova',
  templateUrl: './prova.component.html',
  styleUrls: ['./prova.component.css']
})
export class ProvaComponent implements OnInit {

  prova: Prova;
  idAgendamento: string;
  mostraCapa: boolean;
  agendamentoUsuario: AgendamentoUsuario;
  provaRealizada = false;
  tempoRestante;

  closeResult: string;

  style1 = {
    "margin-bottom": "40px",
    "padding-left": "40px",
    "padding-right": "40px"
  };

  constructor(private activatedRoute: ActivatedRoute,
    private headerService: HeaderService,
    private service: ProvaService,
    private router: Router,
    private tokenService: TokenService,
    private loadingService: LoadingService) {

    this.headerService.menuAtivo('Treinamentos');
    this.agendamentoUsuario = this.activatedRoute.snapshot.data['agendamentoUsuario'];
    this.idAgendamento = this.activatedRoute.snapshot.params['idAgendamentoUsuario'];
  }

  ngOnInit(): void {

    if (!this.agendamentoUsuario.provaFinalizada &&
      this.agendamentoUsuario.podeIniciarProva &&
      !this.agendamentoUsuario.provaIniciada) {

      if (this.tokenService.Id == this.agendamentoUsuario.idUsuario) {
        this.mostraCapa = true;
      }
      else {
        Swal.fire(
          'Esta prova não pertence ao seu usuário.',
          '',
          'warning'
        );
        this.router.navigate(['/PortaldeApoio/Treinamentos/MinhasProvas']);
      }
    }
    else if (!this.agendamentoUsuario.provaIniciada && this.agendamentoUsuario.provaFinalizada) {

      if (this.tokenService.Id == this.agendamentoUsuario.idUsuario) {
        Swal.fire(
          'O período desta prova já foi finalizado. Você não poderá iniciar a prova.',
          '',
          'warning'
        );
        this.router.navigate(['/PortaldeApoio/Treinamentos/MinhasProvas']);
      }
      else {
        Swal.fire(
          'Prova não realizada.',
          '',
          'warning'
        );
        this.router.navigate(['/PortaldeApoio/Treinamentos/MinhasProvas']);
      }
    }
    else if (!this.agendamentoUsuario.podeIniciarProva) {
      Swal.fire(
        'Esta prova ainda não está disponível.',
        '',
        'warning'
      );
      this.router.navigate(['/PortaldeApoio/Treinamentos/MinhasProvas']);
    }
    else {
      setTimeout(() => {
        this.abrirProva();
      });
    }
  }

  finalizarProva() {

    Swal.fire({
      title: 'Ateção',
      text: 'Deseja finalizar a prova?',
      type: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não'
    }).then((result) => {
      if (result.value) {

        this.loadingService.show()
        this.service.finalizarProva(this.prova).subscribe(
          res => this.finalizarProvaSuccess(res),
          err => console.log(err)
        );

      } else if (result.dismiss === Swal.DismissReason.cancel) {

      }
    })
  }

  abrirProva() {
    this.loadingService.show();
    this.service.abrirProva(this.idAgendamento, this.tokenService.Id).subscribe(
      res => this.abrirProvaSucces(res),
      err => this.abrirProvaError(err)
    );
  }

  abrirProvaError(err: any): void {
    console.log(err);
    this.loadingService.hide();
  }

  abrirProvaSucces(res: Prova): void {
    this.loadingService.hide();

    this.prova = res;
    this.mostraCapa = false;

    if (!this.agendamentoUsuario.provaRealizada) {
      timer(0, 60000)
        .subscribe(() => {
          this.calculaTempoRestante();
        })
    }
  }

  calculaTempoRestante() {

    if (!this.agendamentoUsuario.dtInicioProva) {
      this.agendamentoUsuario.dtInicioProva = new Date();
    }

    var dt = new Date(this.agendamentoUsuario.dtInicioProva);
    dt.setMinutes(dt.getMinutes() + this.agendamentoUsuario.duracao);

    let date1: string = new Date().toString();
    let date2: string = dt.toString();

    let diffInMs: number = Date.parse(date2) - Date.parse(date1);
    let diffInMinutes: number = diffInMs / 1000 / 60;

    this.tempoRestante = Math.round(diffInMinutes);

    if (diffInMinutes <= 0) {
      this.loadingService.show()
      this.service.finalizarProva(this.prova).subscribe(
        res => this.finalizarProvaSuccess(res),
        err => console.log(err)
      );
    }

  }

  finalizarProvaSuccess(res: boolean): void {
    this.loadingService.hide();
    if (res)
      this.router.navigate(['/PortaldeApoio/Treinamentos/Prova-Confirmacao/' + this.idAgendamento]);
  }

  selecionar(idAlternativa: string, idQuestao: string) {
    let questao = this.prova.questoes.find(x => x.id == idQuestao);

    questao.alternativas.forEach(elem => {
      if (elem.id != idAlternativa)
        elem.selecionada = false;
    });

    this.service.salvarParcial(questao).subscribe();
  }

}