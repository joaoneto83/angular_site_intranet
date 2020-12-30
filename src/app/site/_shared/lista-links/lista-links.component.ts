import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-lista-links',
    templateUrl: './lista-links.component.html',
    styleUrls: ['./lista-links.component.css']
})
export class ListaLinksComponent implements OnInit{
    
    constructor(private activatedRoute: ActivatedRoute) { }

    @Input()
    links: any[] = [];
    rows: any[] = [];
    
    ngOnInit(): void {
      this.rows = this.groupColumns();
    }

    groupColumns() {
      let conteudo = this.links;
      const newRows = [];
  
      for (let index = 0; index < conteudo.length; index += 6) {
        newRows.push(conteudo.slice(index, index + 6));
      }
  
      return newRows;
    }
}