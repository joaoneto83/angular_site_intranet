import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import * as $ from 'jquery';
import { Linha } from '../../../../_models/linha';
import { Menu } from '../../../../intranet/_models/menu';
import { TranslateService } from 'ng2-translate';
import { TraducaoService } from '../../../../site/_shared/services/traducao.service';
import { SubLinha } from '../../../../_models/subLinha';

@Component({
    selector: 'app-site-submenu-refrigeracao-mobile',
    templateUrl: './site.submenu.refrigeracao.mobile.component.html',
    styleUrls: ['./site.submenu.refrigeracao.mobile.component.css']
})

export class SiteSubMenuRefrigeracaoMobileComponent implements OnInit {

    txtPesquisa: string = '';
    @Input()
    linhasCompletas: Linha[];
    @Input()
    menus: Menu[];
    @Input()
    navbarOpen: boolean;
    @Output()
    navbarUpdated = new EventEmitter<boolean>();

    sublinhas: SubLinha[];

    idioma: string;

    constructor(private router: Router, private translate: TranslateService, private traducaoService: TraducaoService, private activatedRoute: ActivatedRoute) {
        translate.setDefaultLang('pt');
        this.idioma = traducaoService.getIdioma().toString();
        translate.use(this.idioma);
    }

    ngOnInit(): void{
        this.sublinhas = this.activatedRoute.snapshot.data['sublinhasRefrigeracao'];
    }

    linhaOpen = false;
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

    toggleProdutos() {
        this.produtosOpen = !this.produtosOpen;
    }

    pesquisarProduto() {
        if (this.txtPesquisa != '')
            this.router.navigate(['/BuscaProduto/' + this.txtPesquisa]);
    }

    changeLanguage() {
        this.traducaoService.setIdioma(this.idioma);
        this.translate.use(this.idioma);

        window.location.reload();
    }

}