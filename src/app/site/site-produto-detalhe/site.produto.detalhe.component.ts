import { Component, OnInit,  Renderer2, ElementRef, HostListener  } from '@angular/core';
import { Produto } from '../../../app/_models/produto';
import { ActivatedRoute } from '@angular/router';
import { ProdutoDetalheService } from './produto-detalhe.service';
import { Classificacao } from '../../../app/_models/classificacao';
import { EspecificacaoTecnica } from '../../../app/_models/especificacaoTecnica';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'app-site-produto-detalhe',
  templateUrl: './site.produto.detalhe.component.html',
  styleUrls: ['./site.produto.detalhe.component.css']
})



export class SiteProdutoDetalheComponent implements OnInit {



  constructor(private activatedRoute: ActivatedRoute, private produtoDetalheService: ProdutoDetalheService, private renderer: Renderer2, private el: ElementRef,private translate: TranslateService ) { }


  codigoProduto: string;
  produto: Produto;
  chatShow:boolean = false;
  produtos: Produto[];
  filtros: Classificacao[];
  filtrosComparativo: Classificacao[];
  especificacoes: EspecificacaoTecnica[] = [];

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(routeParams => {
      this.produto = this.activatedRoute.snapshot.data['produto'];
      this.filtros = this.activatedRoute.snapshot.data['filtros'];
      this.filtrosComparativo = this.activatedRoute.snapshot.data['filtrosComparativo'];
      this.produtos = this.activatedRoute.snapshot.data['produtos'];
      this.especificacoes = this.activatedRoute.snapshot.data['especificacoes'];

      if (this.activatedRoute.snapshot.params['linha'] != 'Refrigeracao') {
        this.translate.use('pt');
      }
    });

  }

  // setEspecificacoes() {
  //   if (this.produtos && this.produtos.length > 0)
  //     this.especificacoes = this.produtos[0].especificacoesTecnicas;
  // }
  
  


    adcionarElemento(src: string): HTMLScriptElement {
      if ( this.chatShow == true ){
        let div = document.getElementById("gvpFloatChat");
        div.style.display = 'block';
      }else{
        this.chatShow = true;
        const script = this.renderer.createElement('script');
        script.type = 'text/javascript';
        script.src = src;
        this.renderer.appendChild(document.body, script);
        return script;
      }
    }

    escondeChat() {
      var script = document.getElementById("gvpFloatChat");
      script.style.display = 'none';
    }

    chat(){
      this.adcionarElemento('https://webapp.ideacrm.com.br/monitoramento.js.aspx?idc=7618&pre_empresa=1008&pre_depto=1108&floatingchat=1&corbarra=0069a5&textobarra=Chat Online&cortextodabarra=ffffff');
    }

}