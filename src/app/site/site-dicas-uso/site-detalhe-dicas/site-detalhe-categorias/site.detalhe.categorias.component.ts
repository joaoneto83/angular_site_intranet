import { Component, OnInit } from '@angular/core';

import { SiteDicasUsoService } from '../../site.dicas.uso.service';
import { CategoriasDicasUso } from '../../categorias-dicas-uso';
import { MenuCategoria } from './menu-categoria';

@Component({
  selector: 'app-site-detalhe-categorias',
  templateUrl: './site.detalhe.categorias.component.html',
  styleUrls: ['./site.detalhe.categorias.component.css'],
})
export class SiteDetalheCategoriasComponent implements OnInit {

  menu: MenuCategoria[] = [];

  constructor(private service: SiteDicasUsoService) { }

  ngOnInit(): void {
    this.service.getCategorias().subscribe(
      ret => this.getCategoriasSucess(ret),
      err => console.log(err)
    )
  }

  getCategoriasSucess(ret: CategoriasDicasUso): void {

    ret.categories.filter(x => x.parent == 0).forEach(element => {

      let menu1 = {
        id: element.ID,
        nome: element.name,
        slug: element.slug,
        post_count: element.post_count,
        filhos: []//parent
      }

      ret.categories.filter(x => x.parent == menu1.id).forEach(element2 => {
        let menu2 = {
          id: element2.ID,
          nome: element2.name,
          slug: element2.slug,
          post_count: element2.post_count,
          filhos: []//parent
        }

        ret.categories.filter(x => x.parent == menu2.id).forEach(element3 => {
          let menu3 = {
            id: element3.ID,
            nome: element3.name,
            slug: element3.slug,
            post_count: element3.post_count,
            filhos: []//parent
          }

          menu2.filhos.push(menu3);
        });

        menu1.filhos.push(menu2);
      });

      this.menu.push(menu1);
    });

  }

}