import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { Feriado } from './feriado';
import { Mes } from './mes';
import { Semana } from './semana';


@Component({
  selector: 'app-calendario-rh',
  templateUrl: './calendario-rh.component.html',
  styleUrls: ['./calendario-rh.component.css']
})
export class CalendarioRHComponent implements OnInit {

  constructor() {
  }

  @Input()
  feriados: Feriado[];

  @Output()
  mesEmit = new EventEmitter<number>();

  @Output()
  anoEmit = new EventEmitter<number>();

  @Input()
  ano: number;

  @Input()
  mes: number;

  meses: Mes[] = [
    { nome: "Janeiro", numero: 1 },
    { nome: "Fevereiro", numero: 2 },
    { nome: "Março", numero: 3 },
    { nome: "Abril", numero: 4 },
    { nome: "Maio", numero: 5 },
    { nome: "Junho", numero: 6 },
    { nome: "Julho", numero: 7 },
    { nome: "Agosto", numero: 8 },
    { nome: "Setembro", numero: 9 },
    { nome: "Outubro", numero: 10 },
    { nome: "Novembro", numero: 11 },
    { nome: "Dezembro", numero: 12 },
  ];

  dia: number;
  qtdDias: number;
  diaInicialSemana: number;
  mesSelecionado: Mes;
  semanas: Semana[] = [];
  
  ngOnInit(): void {
    this.getMesSelecionado();
  }

  getMesSelecionado() {
    this.dia = new Date().getDate();
    this.mesSelecionado = this.meses.find(x => x.numero == this.mes);
    this.getQtdDias();
  }

  getQtdDias() {
    this.qtdDias = this.getDaysInMonth(this.mes, this.ano);
    this.diaInicialSemana = new Date(this.ano + "-" + this.mes).getDay();

    this.preencherSemanas();
  }

  preencherSemanas() {
    let diaSemana = this.diaInicialSemana;
    let semana = new Semana;
    let mesAnoAtual: boolean = false

    if(new Date().getMonth() + 1 == this.mes && new Date().getFullYear() == this.ano)
      mesAnoAtual = true;

    for (let i = 1; i <= this.qtdDias; i++) {
      switch (diaSemana) {
        case 1:
          semana.segunda = !mesAnoAtual || this.dia != i ? i.toString() : "<div class=\"today\">" + i + "</div>";
          break;
        case 2:
          semana.terca = !mesAnoAtual || this.dia != i ? i.toString() : "<div class=\"today\">" + i + "</div>";
          break;
        case 3:
          semana.quarta = !mesAnoAtual || this.dia != i ? i.toString() : "<div class=\"today\">" + i + "</div>";
          break;
        case 4:
          semana.quinta = !mesAnoAtual || this.dia != i ? i.toString() : "<div class=\"today\">" + i + "</div>";
          break;
        case 5:
          semana.sexta = !mesAnoAtual || this.dia != i ? i.toString() : "<div class=\"today\">" + i + "</div>";
          break;
        case 6:
          semana.sabado = !mesAnoAtual || this.dia != i ? i.toString() : "<div class=\"today\">" + i + "</div>";
          break;
        case 7:
          semana.domingo = !mesAnoAtual || this.dia != i ? i.toString() : "<div class=\"today\">" + i + "</div>";
          break;
      }

      if (diaSemana == 7)
        diaSemana = 1;
      else
        diaSemana++;

      if (semana.sabado) {
        this.semanas.push(semana);
        semana = new Semana;
      }
    }

    this.semanas.push(semana);
  }

  getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate();
  };

  avancarMes() {
    this.semanas = [];

    if (this.mesSelecionado.numero == 12) {
      this.ano++;
      this.mes = 1;
      this.getMesSelecionado();
      this.anoEmit.emit(this.ano);
    }
    else {
      this.mes++;
      this.getMesSelecionado();
    }

    this.mesEmit.emit(this.mes);

    if(new Date().getMonth() + 1 == this.mes && new Date().getFullYear() == this.ano)
      this.dia = new Date().getDate();
    else
      this.dia = 0;
  }

  voltarMes() {
    this.semanas = [];

    if (this.mesSelecionado.numero == 1) {
      this.ano--;
      this.mes = 12;
      this.getMesSelecionado();
      this.anoEmit.emit(this.ano);
    }
    else {
      this.mes--;
      this.getMesSelecionado();
    }

    this.mesEmit.emit(this.mes);

    if(new Date().getMonth() + 1 == this.mes && new Date().getFullYear() == this.ano)
      this.dia = new Date().getDate();
    else
      this.dia = 0;
  }
}
