import { Component, Input } from '@angular/core';
import { Produto } from '../../../../app/_models/produto';
import { ComparativoService } from '../../_shared/site-comparativo/site-comparativo.service';
import Swal from 'sweetalert2';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-site-card-produtos', 
  templateUrl: './site-card-produtos.component.html',
  styleUrls: ['./site-card-produtos.component.css']
})
export class SiteCardProdutosComponent {

  @Input()
  produto: Produto;
  codigoLinha: string;
  codigoSubLinha: string;

  chkCompare: boolean = false;
  
  @Input('itens')
  set allowDay(value: Produto) {
    if (value) {
      this.produto = value;
    }
  }

  constructor(private comparativoService: ComparativoService, activatedRoute: ActivatedRoute){
    this.codigoLinha = activatedRoute.snapshot.params['linha'];
    this.codigoSubLinha = activatedRoute.snapshot.params['subLinha'];  

  }

  habilitaComparar(): boolean
  {
    return this.comparativoService.count() < 3 || this.chkCompare;
  }

  atualizaComparar(object)
  {
    if(object.checked)
    {
      this.comparativoService.add(this.produto);
    }
    else{
      this.comparativoService.remove(this.produto);
    }
  }
}
