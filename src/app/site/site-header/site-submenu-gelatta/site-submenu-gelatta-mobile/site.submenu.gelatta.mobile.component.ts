import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { Linha } from '../../../../_models/linha';
import { Menu } from '../../../../intranet/_models/menu';
import { Produto } from '../../../../_models/produto';

@Component({
    selector: 'app-site-submenu-gelatta-mobile',
    templateUrl: './site.submenu.gelatta.mobile.component.html',
    styleUrls: ['./site.submenu.gelatta.mobile.component.css']
})

export class SiteSubMenuGelattaMobileComponent {

    txtPesquisa: string = '';
    @Input()
    linha: Linha;
    @Input()
    linhasCompletas: Linha[];
    @Input()
    produtos: Produto[];
    @Input()
    menus: Menu[];
    @Input()
    navbarOpen: boolean;
    @Output()
    navbarUpdated = new EventEmitter<boolean>();

    constructor(private router: Router) { }

    linhaOpen = false;
    pecasOpen = false;
    produtosOpen = false;

    toggleNavbar() {
        
        this.navbarOpen = !this.navbarOpen;
        this.navbarUpdated.emit(this.navbarOpen);
    
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

    pesquisarProduto() {
        if (this.txtPesquisa != '')
          this.router.navigate(['/BuscaProduto/' + this.txtPesquisa]);
    }

}