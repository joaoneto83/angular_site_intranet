import { Component, OnInit, Input } from '@angular/core';
import { UtilService } from '../services/util.service';
import { BlocoInstitucional } from '../../_models/blocoInstitucional';
import { TraducaoService } from '../services/traducao.service';

@Component({
  selector: 'app-site-bloco-institucional',
  templateUrl: './site-bloco-institucional.component.html',
  styleUrls: ['./site-bloco-institucional.component.css']
})
export class SiteBlocoInstitucionalComponent implements OnInit {
  constructor(private utilService: UtilService, private traducao: TraducaoService) { }

  blocos: BlocoInstitucional[] = [];

  @Input()
  tela: string;

  ngOnInit(): void {
    if (this.tela == 'refrigeracao')
      this.blocos = this.utilService.retornaBlocosIntitucionaisRefrigeracao();

    else
      this.blocos = this.utilService.retornaBlocosIntitucionaisAutomacao();
  }
}