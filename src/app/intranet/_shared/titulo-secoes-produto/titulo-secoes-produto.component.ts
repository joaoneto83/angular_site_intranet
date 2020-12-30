import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo-secoes-produto',
  templateUrl: './titulo-secoes-produto.component.html',
  styleUrls: ['./titulo-secoes-produto.component.css']
})
export class TituloSecoesProdutoComponent implements OnInit  {
    
  @Input()
  de: string;

  @Input()
  ate: string;

  @Input()
  cor: string;

  @Input()
  fonte: string;

  @Input()
  altura: string;

  @Input()
  altura2: string;

  @Input()
  height: string;

  @Input()
  titulo:string;

  style: string;



  ngOnInit(): void {
    this.style = 'linear-gradient(to right,' + this.de + ',' + this.ate + ')';

  }

}