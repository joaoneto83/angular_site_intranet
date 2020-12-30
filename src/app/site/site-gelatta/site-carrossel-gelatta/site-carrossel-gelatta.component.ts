import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../../../_models/produto';
import { CarrinhoService } from '../site-carrinho-gelatta/carrinho.service';

@Component({
  selector: 'app-site-carrossel-gelatta',
  templateUrl: './site-carrossel-gelatta.component.html',
  styleUrls: ['./site-carrossel-gelatta.component.css']
})
export class SiteCarrosselGelattaComponent implements OnInit {

  produtos: Produto[];
  pages: any[];
  contCarrossel: number = 0;
  indexEspecs: number = 0;

  constructor(private activatedRoute: ActivatedRoute, private router: Router, private carrinhoService: CarrinhoService) { }

  ngOnInit() {
    this.produtos = this.activatedRoute.snapshot.data['produtos'];
    this.pages = this.groupColumns(this.produtos);

    this.getQtdEspecificacoes();
  }

  getQtdEspecificacoes(){
    this.indexEspecs = this.produtos[0].especificacoesTecnicas.length;

    this.produtos.forEach(x => {
      if(x.especificacoesTecnicas.length < this.indexEspecs)
        this.indexEspecs = x.especificacoesTecnicas.length
    });
  }

  groupColumns(produtos: Produto[]) {
    const newPages = [];

    for (let index = 0; index < produtos.length; index += 3) {
      newPages.push(produtos.slice(index, index + 3));
    }

    return newPages;
  }

  getValorMoeda(value: number) {
    if (value) {
      let currencyFormat = { minimumFractionDigits: 0, style: 'currency', currency: 'BRL' };
      return value.toLocaleString("pt-BR", currencyFormat);
    }
  }

  proximaPagina(){
    this.contCarrossel++;
  }

  voltarPagina(){
    this.contCarrossel--;
  }

  adquirirProduto(id){
    let quantidadeProduto = this.carrinhoService.getQuantidade(id);

    this.carrinhoService.setQuantidade(quantidadeProduto + 1, id);

    this.router.navigate(['Gelatta/Carrinho']);
  }
}
