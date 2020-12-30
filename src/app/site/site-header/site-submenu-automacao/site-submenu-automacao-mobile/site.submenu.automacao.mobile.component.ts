import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { Linha } from '../../../../_models/linha';
import { Menu } from '../../../../intranet/_models/menu';

@Component({
    selector: 'app-site-submenu-automacao-mobile',
    templateUrl: './site.submenu.automacao.mobile.component.html',
    styleUrls: ['./site.submenu.automacao.mobile.component.css']
})

export class SiteSubMenuAutomacaoMobileComponent {

    txtPesquisa: string = '';
    @Input()
    linha: Linha;
    @Input()
    linhasCompletas: Linha[];
    @Input()
    menus: Menu[];
    @Input()
    navbarOpen: boolean;
    @Output()
    navbarUpdated = new EventEmitter<boolean>();

    constructor(private router: Router) { }

    linhaOpen = false;
    produtosOpen = false;
    clickOpen = false;

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

    toggleClickVendas(){
        this.clickOpen = !this.clickOpen;
    }

    pesquisarProduto() {
        if (this.txtPesquisa != '')
          this.router.navigate(['/BuscaProduto/' + this.txtPesquisa]);
    }
}