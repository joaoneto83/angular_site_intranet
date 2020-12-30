import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-site-pecas-reposicao',
  templateUrl: './site-pecas-reposicao.component.html',
  styleUrls: ['./site-pecas-reposicao.component.css']
})
export class SitePecasReposicaoComponent implements OnInit {

  pecasReposicao: any;
  pecaAberta: string = '';

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(() => {
      this.pecasReposicao = this.activatedRoute.snapshot.data['pecasReposicao'];
    });
    //console.log(this.pecasReposicao)
  }

  getValorMonetario(value: number) {
    if (value) {
      let currencyFormat = { minimumFractionDigits: 2, style: 'currency', currency: 'BRL' };
      return value.toLocaleString("pt-BR", currencyFormat);
    }
  }

  openPeca(id){
    this.pecaAberta = id;
  }


  closePeca(){
    this.pecaAberta = '';
  }
}
