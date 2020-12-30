import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GrupoDestaque } from '../../../_models/grupoDestaque';
import { SiteCarrosselGrupoDestaqueComponent } from './site-carrossel-produtos/site-carrossel-grupo-destaque.component';
@Component({
  selector: 'app-site-grupo-destaque',
  templateUrl: './site-grupo-destaque.component.html',
  styleUrls: ['./site-grupo-destaque.component.css']
})
export class SiteGrupoDestaqueComponent implements OnInit {

  grupoSelecionado: string;

  @Input()
  gruposDestaque: GrupoDestaque[];

  @ViewChild('carrosselProdutos')
  carrosselProdutos: SiteCarrosselGrupoDestaqueComponent;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router) {
  }

  ngOnInit() {
    if (this.gruposDestaque) {
      if (this.gruposDestaque.length) {
        this.grupoSelecionado = this.gruposDestaque[0].id;
        this.selecionarGrupo(this.gruposDestaque[0].id, this.gruposDestaque[0].produtos);
      }
    }
  }

  selecionarGrupo(id, produtos) {
    this.grupoSelecionado = id;
    this.carrosselProdutos.recarregarCarrossel(produtos);
  }
}