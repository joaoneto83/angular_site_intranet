import { Component, OnInit, AfterViewInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Options } from 'ng5-slider';

@Component({
  selector: 'app-site-lucro-sorvete',
  templateUrl: './site-lucro-sorvete.component.html',
  styleUrls: ['./site-lucro-sorvete.component.css']
})
export class SiteLucroSorveteComponent implements OnInit {

  valorPago: number = 0.6;
  valorVenda: number = 2.5;
  valorLucro: number = 0;
  qtdCasquinha: number = 50;
  options: Options = {
    floor: 50,
    ceil: 200,
    tickStep: 50,
    animate: false,
    showSelectionBar: true,
    showTicksValues: true, 
    selectionBarGradient: {
      from: '#007EFC',
      to: '#006198'
    },
    //getPointerColor: string => { return '#006198' }
  };

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.calcularValorCasquinha();
  }

  calcularValorCasquinha(){
    let qtdSorvetesMes = this.qtdCasquinha * 30;

    let valorPago = this.valorPago * qtdSorvetesMes;
    let valorVendido = this.valorVenda * qtdSorvetesMes;

    this.valorLucro = valorVendido - valorPago;
  }

  getValorMoeda(value: number) {
    if (value) {
      let currencyFormat = { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' };
      return value.toLocaleString("pt-BR", currencyFormat).replace('R$', '');
    }
  }
}
