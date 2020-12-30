import { Component, OnInit } from '@angular/core';
import { UtilService } from '../../_shared/services/util.service';

@Component({
    selector:'app-site-solar-produto',
    templateUrl: './site-solar-produto.component.html',
    styleUrls: ['./site-solar-produto.component.css']
})
export class SiteSolarProdutoComponent implements OnInit{
    
    constructor(private utilService: UtilService) { }

    produtos: any[] = [];
    rows: any[] = [];
    
    ngOnInit(): void {
        this.produtos = this.utilService.retornaProdutosSolar();
        this.rows = this.groupColumns();
    }

    groupColumns() {
        let conteudo = this.produtos;
        const newRows = [];
    
        for (let index = 0; index < conteudo.length; index += 3) {
          newRows.push(conteudo.slice(index, index + 3));
        }
    
        return newRows;
      }
}