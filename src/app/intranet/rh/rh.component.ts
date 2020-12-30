import { Component, OnInit, Input } from '@angular/core';
import { HeaderService } from '../header/header.service';
import { Contato } from '../_models/contato';
import { ActivatedRoute } from '@angular/router';
import { RH } from './rh';
import { Aviso } from '../_shared/aviso/aviso';
import { AvisoService } from '../_shared/aviso/aviso.service';
import { RHService } from './rh.service';
import { Evento } from './evento/evento';
import { Usuario } from '../_models/usuario';
import { ResponsavelSetor } from './responsavel-setor/responsavel-setor';
import { Feriado } from './calendario-rh/feriado';

@Component({
  selector: 'app-rh',
  templateUrl: './rh.component.html',
  styleUrls: ['./rh.component.css']
})
export class RHComponent implements OnInit {

  constructor(
    private headerService: HeaderService,
    private activatedRoute: ActivatedRoute,
    private avisoService: AvisoService,
    private service: RHService) {
    this.headerService.menuAtivo('RH');
  }

  @Input()
  itens: any[];
  avisos: Aviso[];
  eventos: Evento[];
  aniversariantes: Usuario[] = [];
  listaTelefonica: Usuario[] = [];
  responsaveis: ResponsavelSetor[];
  contatos: Contato[];
  feriados: Feriado[];
  ano: number;
  mes: number;
  
  arrayCores = ['#9AC1FF', '#648CCC', '#2D9AD5', '#9ADCFF', '#648CCC', '#54DDFD'];

  model: RH;

  ngOnInit(): void {
    this.ano = new Date().getFullYear();
    this.mes = new Date().getMonth() + 1;
    this.avisoService.getAvisosPorModulo('Intranet-RH').subscribe(
      res => this.avisos = res,
      err => console.log(err)
    );

    this.service.getEventos().subscribe(
      res => this.eventos = res,
      err => console.log(err)
    );

    this.service.getAniversariantesMes().subscribe(
      res => this.aniversariantes = res,
      err => console.log(err)
    );

    this.service.getResponsaveisSetor().subscribe(
      res => this.responsaveis = res,
      err => console.log(err)
    );

    this.service.getListaTelefonica('').subscribe(
      res => this.getListaTelefonicaSuccess(res),
      err => console.log(err)
    );

    this.carregarEventosCalendario();

    this.model = this.activatedRoute.snapshot.data["model"];
  }
  
  getListaTelefonicaSuccess(res: Usuario[]): void {
    this.listaTelefonica = res

    if (this.listaTelefonica) {
      this.listaTelefonica.forEach(elem => {
        elem.corListaTelefonica = this.arrayCores[Math.floor(Math.random() * this.arrayCores.length)];
      })
    }
  }

  carregarEventosCalendario(){
    this.service.getFeriados(this.ano).subscribe(
      res => this.getFeriadosSuccess(res),
      err => this.getFeriadosError(err)
    );
  }

  getFeriadosSuccess(res) {
    this.feriados = res;

    this.feriados.forEach((item) => {
        let arrData = item.date.split("/");
        item.dias = (+arrData[0]).toString();
        item.mes = +arrData[1];
    });
    
    this.service.getEventosCalendario(this.ano).subscribe(
      res => this.feriados = this.feriados.concat(res),
      err => console.log(err)
    );
  }

  getFeriadosError(err) {
    console.log(err);
    this.service.getEventosCalendario(this.ano).subscribe(
      res => this.feriados = res,
      err => console.log(err)
    );
  }

  reloadMes(event) {
    this.mes = event;
  }

  reloadAno(event) {
    this.ano = event;
    this.carregarEventosCalendario();
  }

}
