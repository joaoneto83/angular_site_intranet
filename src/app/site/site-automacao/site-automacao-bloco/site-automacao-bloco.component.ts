import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilService } from '../../_shared/services/util.service';
import { BlocoAutomacao } from '../../_models/blocoAutomacao';

@Component({
  selector: 'app-automacao-bloco',
  templateUrl: './site-automacao-bloco.component.html',
  styleUrls: ['./site-automacao-bloco.component.css']
})
export class SiteAutomacaoBlocoComponent implements OnInit {

  blocos: BlocoAutomacao[] = [];
  rows: any[] = [];

  constructor(private activatedRoute: ActivatedRoute, private utilService: UtilService) { }

  ngOnInit() {

    this.blocos = this.utilService.retornaBlocosAutomacaoHome();
    this.rows = this.groupColumns(this.blocos);
  }


  groupColumns(tabela: BlocoAutomacao[]) {
    const newRows = [];

    for (let index = 0; index < tabela.length; index += 3) {
      newRows.push(tabela.slice(index, index + 3));
    }

    return newRows
  }

}
