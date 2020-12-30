import { Component, OnInit, Input } from '@angular/core';
import { SiteHeaderService } from './site.header.service';
import { Menu } from '../../../app/intranet/_models/menu';
import { Linha } from '../../../app/_models/linha';
import * as $ from 'jquery';
import { SubLinha } from '../../../app/_models/subLinha';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Produto } from '../../_models/produto';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'app-site-header',
  templateUrl: './site.header.component.html',
  styleUrls: ['./site.header.component.css']
})
export class SiteHeaderComponent implements OnInit {

  menus: Menu[];

  menuAtivo: string;

  showSearch: boolean = false;

  txtPesquisa: string = '';

  @Input()
  headerClass: string = '';

  @Input()
  linhas: Linha[];

  @Input()
  sublinhas: SubLinha[];

  @Input()
  headerAutomacao: boolean;

  @Input()
  headerGelatta: boolean;

  @Input()
  headerRefrigeracao: boolean;

  @Input()
  linhasCompletas: Linha[];
  produtos: Produto[];
  
  constructor(private headerService: SiteHeaderService, private router: Router, private activatedRoute: ActivatedRoute, private translate: TranslateService) {
    this.headerService.menuAtivo$.subscribe((data) => {
      this.menuAtivo = data;
    });
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        if (!event.url.includes('Refrigeracao'))
          this.translate.use('pt');
        if (!event.url.includes('refrigeracao'))
          this.translate.use('pt');
      }
    });
  }

  ngOnInit() {
    this.produtos = this.activatedRoute.snapshot.data['produtos'];

    this.carregaMenu();    
  }

  get logado(): boolean {
    return true;
  }

  carregaMenu() {
    this.menus = [
      { id: '1', nome: 'O grupo Elgin', rota: '/GrupoElgin' } as Menu,
      { id: '2', nome: 'Suporte Técnico', rota: '/SuporteTecnico' } as Menu,
      { id: '3', nome: 'Blog' } as Menu,
      { id: '4', nome: 'Área Restrita', rota: '/PortaldeApoio' } as Menu,
      { id: '5', nome: 'Seja uma Assistência Técnica', rota: '/SejaAssistenciaTecnica' } as Menu,
    ];
  }

  navbarOpen = false;
  linhaOpen = false;
  produtosOpen = false;
  pecasOpen = false;

  toggleNavbar() {

    this.navbarOpen = !this.navbarOpen;

    var menu = $('.menuMobile');

    if (this.navbarOpen) {
      menu.addClass("sticky");
    } else {
      menu.removeClass("sticky");
    }
  }

  toggleLinha() {
    this.linhaOpen = !this.linhaOpen;
  }

  toggleProdutos(){
    this.produtosOpen = !this.produtosOpen;
  }

  togglePecas(){
    this.pecasOpen = !this.pecasOpen;
  }

  escondeChat() {

    var script = document.getElementById("gvpFloatChat");
     script.style.display = 'none';
  }

  pesquisarProduto() {
    if (this.txtPesquisa != '')
      this.router.navigate(['/BuscaProduto/' + this.txtPesquisa]);
  }

}
