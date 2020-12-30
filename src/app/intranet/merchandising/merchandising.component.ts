import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Notificacao } from '../_models/notificacao';
import { HeaderService } from '../header/header.service';
import { UtilService } from '../_shared/services/util.services';
import { Campanha } from '../_models/campanha';
import { Aviso } from '../_shared/aviso/aviso';
import { AvisoService } from '../_shared/aviso/aviso.service';
import { ActivatedRoute } from '@angular/router';
import { Merchandising } from './merchandising';

@Component({
  selector: 'app-merchandising',
  templateUrl: './merchandising.component.html',
  styleUrls: ['./merchandising.component.css']
})
export class MerchandisingComponent implements OnInit {

  model: Merchandising;

  constructor(
    private headerService: HeaderService, 
    private activatedRoute: ActivatedRoute,
    private utilService: UtilService, 
    private avisoService: AvisoService) { 
    this.headerService.menuAtivo('Merchandising');
  }

  @Input()
  itens: any[];
  avisos: Aviso[] = [];
  campanhas: Notificacao[];
  imagensBanner: Campanha[];

  ngOnInit(): void {
    this.avisoService.getAvisosPorModulo('Intranet-Merchandising').subscribe(
      res => this.avisos = res,
      err => console.log(err)
    )
    
    this.campanhas = this.utilService.retornaCampanhaAviso();
    this.imagensBanner = this.utilService.retornaBannerMerchan();

    this.model = this.activatedRoute.snapshot.data["model"];
  }
}
