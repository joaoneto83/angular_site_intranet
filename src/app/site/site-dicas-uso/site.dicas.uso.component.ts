import { Component, OnInit, EventEmitter, Output, Input, OnDestroy, ViewChild, ElementRef, AfterViewInit, Inject, PLATFORM_ID, Renderer2 } from '@angular/core';
import { Postagem } from './Postagem';
import { SiteDicasUsoService } from './site.dicas.uso.service';
import { ActivatedRoute } from '@angular/router';
import { Produto } from '../../../app/_models/produto';
import { LoadingService } from '../../../app/_shared/services/loading.service';
import { Linha } from '../../../app/_models/linha';
import { ProdutoService } from '../../../app/_shared/services/produto.service';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-site-dicas-uso',
  templateUrl: './site.dicas.uso.component.html',
  styleUrls: ['./site.dicas.uso.component.css']
})
export class SiteDicasUsoComponent implements OnInit, AfterViewInit, OnDestroy {


  constructor(
    private produtoService: ProdutoService,
    private activatedRoute: ActivatedRoute,
    private loadingService: LoadingService,
    private renderer: Renderer2,
    private service: SiteDicasUsoService,
    @Inject(PLATFORM_ID) private platformId: Object
    ) { }

  rows: any[];
  postagens: Postagem[] = [];
  idProduto: string;
  slugCategoria: string;
  produto: Produto;
  pesquisaOn: boolean;
  chatShow:boolean = false;

  linhas: Linha[];

  linkCarregarMais: string;


  ngOnInit(): void {
    this.linhas = this.activatedRoute.snapshot.data['linhas'];

    this.activatedRoute.params.subscribe(routeParams => {
      this.idProduto = this.activatedRoute.snapshot.params['idProduto'];
      this.slugCategoria = this.activatedRoute.snapshot.params['idCategoria'];

      if (this.idProduto) {
        this.carregaProduto();
      }

      if (this.slugCategoria != undefined) {
        this.CarregaPostsCategoria();
      }
    });

    if (this.slugCategoria == undefined) {
      this.service.getPostagens().subscribe(
        ret => this.montaModelPost(ret),
        err => console.log(err)
      );
    }

    if (isPlatformBrowser(this.platformId)) {
      if (document.querySelector('#gvpFloatChat')) {
        (document.querySelector('#gvpFloatChat') as HTMLElement).style.right = '20px';
        (document.querySelector('#gvpFloatChat') as HTMLElement).style.left = 'auto';
      }
    }
  }

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      if (document.querySelector('#gvpFloatChat')) {
        (document.querySelector('#gvpFloatChat') as HTMLElement).style.right = 'auto';
        (document.querySelector('#gvpFloatChat') as HTMLElement).style.left = '-500px';
      }
    }
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      var secao = this.activatedRoute.snapshot.params['secao'];

      if (secao) {
        var el = document.getElementById(secao);
        el.scrollIntoView(true);
        if (secao != "DownloadCenter")
          window.scrollBy(0, -60);
      }
    }
  }
  // scrollToElement(element): void {
  //   console.log(element);
  //   element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  // }

  carregaProduto() {
    this.loadingService.show();

    this.produtoService.get(this.idProduto).subscribe(
      res => {
        this.produto = res;
        this.realizaPesquisa(this.produto.nomeProduto);
        this.loadingService.hide();
      },
      err => {
        console.log(err);
        this.loadingService.hide();
      }
    );
  }

  CarregaPostsCategoria() {
    this.postagens = [];

    this.service.getPostsCategoria(this.slugCategoria).subscribe(
      ret => this.montaModelPost(ret),
      err => console.log(err)
    );
  }

  realizaPesquisa(texto) {
    this.postagens = [];

    this.service.searchPostagens(texto).subscribe(
      ret => this.montaModelPost(ret),
      err => console.log(err)
    );
  }

  montaModelPost(ret) {

    this.linkCarregarMais = ret.meta.next_page;

    ret.posts.forEach(element => {

      let tags: string[] = [];

      for (let prop in element.tags) {
        tags.push(element.tags[prop].name);
      }

      this.postagens.push({
        id: element.ID,
        content: element.content,
        titulo: element.title,
        descricao: element.excerpt.toString().length > 150 ? element.excerpt.substring(0, 150) + "[...]</p>" : element.excerpt,
        tags: tags
      });
    });

    this.rows = this.groupColumns(this.postagens);
  }

  retornaEstadoPesquisa($event) {
    this.pesquisaOn = $event;
  }

  carregarMais() {
    this.service.morePostagens(this.linkCarregarMais).subscribe(
      ret => this.montaModelPost(ret),
      err => console.log(err)
    );
  }

  groupColumns(postagens: Postagem[]) {
    const newRows = [];
    for (let index = 0; index < postagens.length; index += 3) {
      newRows.push(postagens.slice(index, index + 3));
    }
    return newRows;
  }

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