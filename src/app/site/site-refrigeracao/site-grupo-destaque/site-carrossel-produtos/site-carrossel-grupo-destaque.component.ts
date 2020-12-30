import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from '../../../../_models/produto';

@Component({
  selector: 'app-site-carrossel-grupo-destaque',
  templateUrl: './site-carrossel-grupo-destaque.component.html',
  styleUrls: ['./site-carrossel-grupo-destaque.component.css']
})
export class SiteCarrosselGrupoDestaqueComponent implements OnInit {

  produtos: Produto[];
  pages: any[];
  mobilePages: any[];
  contCarrossel: number = 0;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
  }

  recarregarCarrossel(produtos){
    this.contCarrossel = 0;
    this.produtos = produtos;
    this.pages = this.groupPages(this.produtos);
    this.mobilePages = this.groupMobilePages(this.produtos);
    console.log(produtos);
  }

  groupPages(produtos: Produto[]) {
    const newPages = [];

    for (let index = 0; index < produtos.length; index += 5) {
      newPages.push(produtos.slice(index, index + 5));
    }

    return newPages;
  }

  groupMobilePages(produtos: Produto[]) {
    const newPages = [];

    for (let index = 0; index < produtos.length; index += 2) {
      newPages.push(produtos.slice(index, index + 2));
    }

    return newPages;
  }

  proximaPagina(){
    this.contCarrossel++;
  }

  voltarPagina(){
    this.contCarrossel--;
  }
}
