import { Component, OnInit, Input, OnChanges, SimpleChanges, ɵConsole, Output, EventEmitter } from '@angular/core';
import { TreinamentoMerchan } from '../teinamento-merchan';

@Component({
  selector: 'app-card-treinamento-merchan',
  templateUrl: './card-treinamento-merchan.component.html',
  styleUrls: ['./card-treinamento-merchan.component.css']
})
export class CardTreinamentoMerchanComponent implements OnInit {

  @Input()
  itens: TreinamentoMerchan;
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
