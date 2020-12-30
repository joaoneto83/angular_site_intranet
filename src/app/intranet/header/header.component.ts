import { Component, OnInit, Input, ElementRef, ViewChild } from '@angular/core';
import { Menu } from '../_models/menu';
import { TokenService } from '../../../app/_core/services/token.service';
import { Router } from '@angular/router';
import { Usuario } from '../_models/usuario';
import { NotificacaoService } from './notificacao.service';
import { timer } from 'rxjs';
import { Notificacao } from './Notificacao';
import { LoadingService } from '../../../app/_shared/services/loading.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input()
  menus: Menu[];

  novasNotificacoes: string;
  notificacoes: Notificacao[];

  usuario: Usuario;

  showMenuUsuario: boolean = false;

  ativaNotificacao: boolean = true;

  @Input()
  headerClass: string = '';

  @ViewChild('divFixaTopo')
  divHeader: ElementRef<HTMLInputElement>;

  constructor(
    private router: Router,
    private notificacaoService: NotificacaoService,
    private loadingService: LoadingService,
    private tokenService: TokenService
  ) {

  }

  ngOnInit() {
    this.tokenService.getUser().subscribe(
      res => {
        this.usuario = res;

        this.getNotificacoes();
      }
    )
  }

  getNotificacoes() {
    timer(0, 30000)
      .subscribe(() => {
        if (this.ativaNotificacao && !this.showMenuUsuario) {
          this.notificacaoService.get(this.usuario.id).subscribe(
            res => {
              this.notificacoes = res;
              this.novasNotificacoes = this.retornaQuantidadeNotificacoes();

              if (this.notificacoes.length == 0) {
                this.notificacoes = null;
              }
            },
            err => {
              console.log(err);
              this.ativaNotificacao = false;
            })
        }
      });
  }

  retornaQuantidadeNotificacoes(): string {
    let qtd = this.notificacoes.filter(x => !x.dataVisualizacao).length;
    if (!qtd || qtd < 1) {
      // this.notificacoes = null;
      return null;
    }

    if (qtd > 9) {
      return "+9";
    }

    return qtd.toString();
  }

  get logado(): boolean {
    return true;
  }

  logout() {
    this.tokenService.removeToken();
    this.router.navigate([""]);
  }

  clickMenuUsuario() {

    this.showMenuUsuario = !this.showMenuUsuario;

    if (this.novasNotificacoes) {
      this.notificacaoService.visualizar(this.usuario.id).subscribe();
    }
  }

  limpar() {
    this.notificacaoService.limpar(this.usuario.id).subscribe();
    this.notificacoes = null;
    this.novasNotificacoes = null;
  }

  abrirLink(link) {
    this.loadingService.show();
    
    this.router.navigate([link]).then(()=>{
      this.loadingService.hide();
    });
  }

}
