import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { SubLinha } from '../../../../app/_models/subLinha';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SideBarComponent implements OnInit, OnChanges {
  
  
  @Output()
  clickProduto = new EventEmitter<string>();
  
  @Input()
  sublinhas: SubLinha[];

  produtoSelecionado: string;
  
  ngOnInit(): void {
  }
  
  ngOnChanges(changes: SimpleChanges): void {
  }

  selecionaProduto(id: string) {
    this.produtoSelecionado = id;
    this.clickProduto.emit(id);
  }
}