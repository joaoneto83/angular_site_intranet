import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import Swal from 'sweetalert2';
import { PropositoService } from './proposito.service';
import { Proposito } from './proposito';
import { LoadingService } from '../../../_shared/services/loading.service';

@Component({
  selector: 'app-proposito',
  templateUrl: './proposito.component.html',
  styleUrls: ['./proposito.component.css']
})

export class PropositoComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute, private service: PropositoService,
    private sanitizer: DomSanitizer, private loadingService: LoadingService) { }

  proposito: Proposito;

  mostraEditar: boolean = false;

  ngOnInit(): void {
    this.proposito = this.activatedRoute.snapshot.data['proposito'];

    this.proposito.content = this.sanitizer.bypassSecurityTrustHtml(this.proposito.texto);
  }

  editar() {
    if (this.mostraEditar)
      this.mostraEditar = false;
    else
      this.mostraEditar = true;
  }

  salvar() {
    this.loadingService.show();
    this.service.salvar(this.proposito).subscribe(
      res => this.salvarSuccess(res),
      err => this.salvarError(err)
    )
  }

  salvarError(err: any): void {
    console.log(err);
    this.loadingService.hide();
    Swal.fire('Erro', 'Algo de errado aconteceu. Tente novamente mais tarde', 'error');
  }

  salvarSuccess(res: Proposito): void {
    this.loadingService.hide();

    this.proposito = res;
    this.proposito.content = this.sanitizer.bypassSecurityTrustHtml(this.proposito.texto);
    
    Swal.fire('Sucesso', 'Texto salvo com sucesso!', 'success');
  }
}
