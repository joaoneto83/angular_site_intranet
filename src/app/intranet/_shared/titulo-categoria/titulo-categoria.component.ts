import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titulo-categoria',
  templateUrl: './titulo-categoria.component.html',
  styleUrls: ['./titulo-categoria.component.css']
})
export class TituloCategoriaComponent implements OnInit  {
    
  @Input()
  de: string;

  @Input()
  ate: string;

  @Input()
  cor: string;

  @Input()
  height: string;

  @Input()
  titulo:string;

  style: string;

  ngOnInit(): void {
    
    this.style = 'linear-gradient(to right, ' + this.de + ', ' + this.ate + ')';
  }

}