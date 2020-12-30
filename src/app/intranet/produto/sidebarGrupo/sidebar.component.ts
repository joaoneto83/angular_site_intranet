import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { SubLinha } from '../../../../app/_models/subLinha';

@Component({
  selector: 'app-sidebargrupo',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SideBarGrupoComponent implements OnInit, OnChanges {
  
  
  @Output()
  clickProduto = new EventEmitter<string>();
  
  @Input()
  sublinhas: SubLinha[];

  produtoSelecionado: string;
  
  ngOnInit(): void {
  }
  
  ngOnChanges(changes: SimpleChanges): void {
  }

  selecionaGrupo(id: string) {
    this.produtoSelecionado = id;
    this.clickProduto.emit(id);
  }
}
