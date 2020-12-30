import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ProvaService } from '../../prova.service';
import { Produto } from '../../../../../_models/produto';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-bloco-produto',
  templateUrl: './bloco-produto.component.html',
  styleUrls: ['./bloco-produto.component.css']
})
export class BlocoProdutoComponent implements OnInit {

  itens: Produto[] = [];
  txtBusca: string = '';
  maxHeightUl: string;
  debounce: Subject<string> = new Subject<string>();

  @Input()
  idProduto: string;

  @Output()
  produto = new EventEmitter<Produto>();

  constructor(private service: ProvaService, private _modalService: NgbModal) { }

  ngOnInit(): void {
    this.service.getProdutos(this.txtBusca).subscribe(
      res => this.getProdutosSuccess(res),
      err => console.log(err));

    this.debounce
      .pipe(debounceTime(300))
      .subscribe(filter => this.getProdutos(filter));
  }

  getProdutosSuccess(res){
    this.itens = res

    if(this.idProduto != null && this.idProduto != '00000000-0000-0000-0000-000000000000'){
      this.produto.emit(this.itens.find(x => x.id == this.idProduto));
    }
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  getProdutos(filter: string) {
    this.service.getProdutos(filter).subscribe(
      res => this.itens = res,
      err => console.log(err)
    )
  }

  selecionar(id){
    this.produto.emit(this.itens.find(x => x.id == id));
  }

}