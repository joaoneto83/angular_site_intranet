import { Component, OnInit } from '@angular/core';
import { MenuCategoria } from '../../site-dicas-uso/site-detalhe-dicas/site-detalhe-categorias/menu-categoria';
import { SiteBlogService } from '../site.blog.service';
import { CategoriasBlog } from '../categorias-blog';
import * as $ from 'jquery';

@Component({
    selector: 'app-site-blog-header',
    templateUrl: 'site-blog-header.component.html',
    styleUrls: ['site-blog-header.component.css']
})
export class SiteBlogHeaderComponent implements OnInit {

    menus: MenuCategoria[] = [];

    constructor(private service: SiteBlogService) { }

    ngOnInit(): void {
        this.service.getCategorias().subscribe(
            ret => this.getCategoriasSucess(ret),
            err => console.log(err)
        )
    }
    getCategoriasSucess(ret: CategoriasBlog): void {
   
    }

    // getCategoriasSucess(ret: CategoriasBlog): void {
    //     ret.categories.filter(x => x.parent == 0).forEach(element => {

    //         let menu1 = {
    //             id: element.ID,
    //             nome: element.name,
    //             slug: element.slug,
    //             post_count: element.post_count,
    //             filhos: []//parent
    //         }

    //         ret.categories.filter(x => x.parent == menu1.id).forEach(element2 => {
    //             let menu2 = {
    //                 id: element2.ID,
    //                 nome: element2.name,
    //                 slug: element2.slug,
    //                 post_count: element2.post_count,
    //                 filhos: []//parent
    //             }

    //             ret.categories.filter(x => x.parent == menu2.id).forEach(element3 => {
    //                 let menu3 = {
    //                     id: element3.ID,
    //                     nome: element3.name,
    //                     slug: element3.slug,
    //                     post_count: element3.post_count,
    //                     filhos: []//parent
    //                 }

    //                 menu2.filhos.push(menu3);
    //             });

    //             menu1.filhos.push(menu2);
    //         });

    //         this.menus.push(menu1);
    //     });

    //     this.menus = this.menus.slice(0, 8);
    // }

    navbarOpen = false;

    toggleNavbar() {
        this.navbarOpen = !this.navbarOpen;

        var menu = $('.menuMobile');

        if (this.navbarOpen) {
            menu.addClass("sticky");
        } else {
            menu.removeClass("sticky");
        }
    }

}