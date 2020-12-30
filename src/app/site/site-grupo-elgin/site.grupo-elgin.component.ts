import { Component, OnInit, AfterViewInit } from '@angular/core';
import { UtilService } from '../_shared/services/util.service';
import { LinkGrupoElgin } from '../_models/linkGrupoElgin';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-site-grupo-elgin',
    templateUrl: './site.grupo-elgin.component.html',
    styleUrls: ['./site.grupo-elgin.component.css']
  })
  export class SiteGrupoElginComponent implements OnInit, AfterViewInit {
  
    constructor(private utilService: UtilService,
      private activatedRoute: ActivatedRoute) { }

    linksBloco1: LinkGrupoElgin[] = [];
    linksBloco2: LinkGrupoElgin[] = [];
    rowsBloco1: any[];
    rowsBloco2: any[];
    
    ngOnInit(): void {
      this.linksBloco1 = this.utilService.retornaLinksBloco1();
      this.linksBloco2 = this.utilService.retornaLinksBloco2();

      this.rowsBloco1 = this.groupColumns(this.linksBloco1);
      this.rowsBloco2 = this.groupColumns(this.linksBloco2);
    }

    ngAfterViewInit(): void {
      var secao = this.activatedRoute.snapshot.params['secao'];

      if (secao) {
        var el = document.getElementById(secao);
        el.scrollIntoView(true);
        window.scrollBy(0, -60);
      }
    }
    
    groupColumns(link: LinkGrupoElgin[]) {
      const newRows = [];
      for (let index = 0; index < link.length; index += 2) {
          newRows.push(link.slice(index, index + 2));
      }
      return newRows;
  }
}