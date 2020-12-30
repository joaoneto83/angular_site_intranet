import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from 'jquery';
import { Linha } from '../../../../_models/linha';
import { Menu } from '../../../../intranet/_models/menu';

@Component({
    selector: 'app-site-submenu-mobile',
    templateUrl: './site.submenu.mobile.component.html',
    styleUrls: ['./site.submenu.mobile.component.css']
  })
  export class SiteSubMenuMobileComponent {

    txtPesquisa: string = '';
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

    pesquisarProduto() {
        if (this.txtPesquisa != '')
          this.router.navigate(['/BuscaProduto/' + this.txtPesquisa]);
      }

  }