import { Component, OnInit, Input, OnChanges, SimpleChanges, ɵConsole, Output, EventEmitter } from '@angular/core';
import { TabelaPreco } from '../tabela-preco';

@Component({
  selector: 'app-card-tabela-preco',
  templateUrl: './card-tabela-preco.component.html',
  styleUrls: ['./card-tabela-preco.component.css']
})
export class CardTabelaPrecoComponent implements OnInit {

  @Input()
  itens: TabelaPreco;
  @Input()
  tamanhoItens: string = 'col-sm-4';
  @Output()
  recarregar = new EventEmitter<boolean>();

  ngOnChanges(changes: SimpleChanges): void {
  }

  ngOnInit(): void {
    if (this.itens.arquivos.length > 0) {
      this.itens.arquivos.forEach(element => {
        element.extensao = element.caminho.split('.').pop();
      });

      if (this.itens.arquivos.length == 1)
        this.tamanhoItens = 'col-sm-12';

      if (this.itens.arquivos.length == 2)
        this.tamanhoItens = 'col-sm-6';

      if (this.itens.arquivos.length >= 3)
        this.tamanhoItens = 'col-sm-4';
    }
  }

  retornaCarregamento($event) {
    this.recarregar.emit($event);
  }
}
