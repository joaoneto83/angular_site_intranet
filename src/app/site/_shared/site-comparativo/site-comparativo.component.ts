import { Component, OnInit, Input } from '@angular/core';
import { Produto } from '../../../../app/_models/produto';
import { Classificacao } from '../../../../app/_models/classificacao';
import { ComparativoService } from './site-comparativo.service';
import { ProdutosComparativo } from './produtosComparativo';
import { EspecificacaoTecnica } from '../../../../app/_models/especificacaoTecnica';
import { SubLinha } from 'src/app/_models/subLinha';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-site-comparativo',
  templateUrl: './site-comparativo.component.html',
  styleUrls: ['./site-comparativo.component.css']
})
export class SiteComparativoComponent implements OnInit {

  @Input()
  classificacoes: Classificacao[]

  @Input()
  especificacoes: EspecificacaoTecnica[]

  @Input()
  produtos: Produto[];

  @Input()
  mostraCombo: boolean;
  

  subLinha: SubLinha;

  idSelecionado1: string = '';
  idSelecionado2: string = '';
  idSelecionado3: string = '';

  a : any;
  c : any;

  produtosComparativo: ProdutosComparativo = {
    produto1: {id:""} as Produto,
    produto2: {id:""} as Produto,
    produto3: {id:""} as Produto
  } as ProdutosComparativo

  constructor(private service: ComparativoService, private activatedRoute: ActivatedRoute) { 


  }

  ngOnInit(): void {
  


  this.activatedRoute.params.subscribe(() => {
    this.subLinha = this.activatedRoute.snapshot.data['sublinha'];
  });
  
  this.a = this.produtos[0];
  this.c = this.a.especificacoesTecnicas;
  console.log(this.c);


    this.service.get().subscribe(
      prods =>{
        if(prods)
        {
          this.produtosComparativo = prods
        }
      } 
    )
  }

  getProduto(index: number) {
    this.getespecifica();
    if (index == 1) return this.produtosComparativo.produto1;
    if (index == 2) return this.produtosComparativo.produto2;
    if (index == 3) return this.produtosComparativo.produto3;
  }
  getespecifica(){
    for (let e of this.produtos) {
      // data.push(e.especificacoesTecnicas);
      // const especificacaos = e.especificacoesTecnicas;
      // for (let i of especificacaos){
      //   const especificacaosdentro = i.nomeEspecificacao;
  
      // }
      
   }
  }

}
