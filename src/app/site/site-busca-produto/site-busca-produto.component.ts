import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ResultadoInputBusca } from '../site-dicas-uso/resultadoInputBusca';
import { SiteBuscaProdutoService } from './site-busca-produto.service';

@Component({
  selector: 'app-site-busca-produto',
  templateUrl: './site-busca-produto.component.html',
  styleUrls: ['./site-busca-produto.component.css']
})
export class SiteBuscaProdutoComponent implements OnInit, OnChanges {

  produtos: ResultadoInputBusca[] = [];
  termo: string = '';
  txtPesquisa: string = '';

  constructor(private activatedRoute: ActivatedRoute, private service: SiteBuscaProdutoService, private router: Router) { }

  ngOnInit() {
    this.activatedRoute.params.subscribe(routeParams => {
      this.termo = this.activatedRoute.snapshot.params['termo'];

      this.service.getResultadoBusca(this.termo).subscribe(
        res => this.produtos = res,
        err => console.log(err)
      );
    });

  }

  ngOnChanges(changes: SimpleChanges) {
  }

  pesquisarProduto() {
    if (this.txtPesquisa != '') {
      this.router.navigate(['/BuscaProduto/' + this.txtPesquisa]);
    }
  }
}
