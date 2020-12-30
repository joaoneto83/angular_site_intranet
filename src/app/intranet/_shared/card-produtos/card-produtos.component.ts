import { Component, OnInit, Input, OnChanges, SimpleChanges, ɵConsole } from '@angular/core';
import { Card } from '../../../../app/intranet/_models/card-produto';

@Component({
  selector: 'app-card-produtos',
  templateUrl: './card-produtos.component.html',
  styleUrls: ['./card-produtos.component.css']
})
export class CardProdutosComponent implements OnInit {

  @Input()
  itens: Card;
  @Input()
  tamanhoItens: string = 'col-sm-4';
  
  @Input('itens')
  set allowDay(value: Card) {
    if (value) {
      this.itens = value;
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
  }
}
