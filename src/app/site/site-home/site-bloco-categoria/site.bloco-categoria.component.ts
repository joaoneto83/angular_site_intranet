import { Component, OnInit, Input } from '@angular/core';
import { BlocoCategoria } from '../../_models/blocoCategoria';
import { ActivatedRoute } from '@angular/router';
import { UtilService } from '../../_shared/services/util.service';

@Component({
  selector: 'app-bloco-categoria',
  templateUrl: './site.bloco-categoria.component.html',
  styleUrls: ['./site.bloco-categoria.component.css']
})
export class SiteBlocoCategoriaComponent implements OnInit {

  categorias: BlocoCategoria[] = [];
  rows: any[] = [];

  constructor(private activatedRoute: ActivatedRoute, private utilService: UtilService) { }

  ngOnInit() {

    this.categorias = this.utilService.retornaCategoriasBlocoSite();
    this.rows = this.groupColumns(this.categorias);
  }


  groupColumns(tabela: BlocoCategoria[]) {
    const newRows = [];

    for (let index = 0; index < tabela.length; index += 3) {
      newRows.push(tabela.slice(index, index + 3));
    }

    return newRows
  }

}
