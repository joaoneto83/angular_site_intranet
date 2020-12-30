import { Component, OnInit } from '@angular/core';
import { Classificacao } from '../_models/classificacao';
import { UtilService } from '../_shared/services/util.services';
import { HeaderService } from '../header/header.service';
import { Catalogo } from './catalogo';
import { CatalogoService } from './catalogo.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { TokenService } from '../../../app/_core/services/token.service';
import { Usuario } from '../_models/usuario';
import { SessaoService } from 'src/app/_core/sessao/sessao.service';

@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit {

  classificacoes: Classificacao[];
  catalogos: Catalogo[];
  usuario: boolean;

  constructor(private utilService: UtilService, 
    private headerService: HeaderService,
    private service: CatalogoService,
    private activatedRoute: ActivatedRoute,
    private sessionService: SessaoService, 
    private tokenService: TokenService) { 
    this.headerService.menuAtivo('Catalogo');
    this.usuario = false;
  }



  ngOnInit(): void {
    this.catalogos = this.activatedRoute.snapshot.data['catalogos'];
     this.usuario = this.tokenService.haveAdmin();
    console.log("usuario", this.usuario);
  }

  retornaCarregamento($event) {
    this.service.getCatalogos().subscribe(
      res => this.getTabelasPrecoSuccess(res),
      err => this.getTabelasPrecoError(err),
    )
  }
  getTabelasPrecoSuccess(res: Catalogo[]): void {
    this.catalogos = res;
  }
  getTabelasPrecoError(err: any): void {
    console.log(err);
    Swal.fire('Erro', 'Erro ao recarregar Catálogos. Recarregue a página', 'error');
  }

}