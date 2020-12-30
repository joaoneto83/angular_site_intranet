import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { HeaderService } from '../../../../app/intranet/header/header.service';
import { ActivatedRoute } from '@angular/router';
import { Aviso } from '../aviso/aviso';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-aviso-detalhe',
  templateUrl: './aviso-detalhe.component.html',
  styleUrls: ['./aviso-detalhe.component.css']
})
export class AvisoDetalheComponent implements OnInit, OnChanges {

  aviso: Aviso;
  fotos: string[];
  titulo: string;
  descricao: string;
  id: number;
  linkVoltar: string = '';

  constructor(private headerService: HeaderService,
    private activatedRoute: ActivatedRoute,
    private sanitizer: DomSanitizer) {
    this.headerService.menuAtivo('Merchandising');
  }

  ngOnInit(): void {
    this.aviso = this.activatedRoute.snapshot.data['aviso'];

    this.aviso.content = this.sanitizer.bypassSecurityTrustHtml(this.aviso.descricao);

    if (this.aviso.modulo == 'Intranet-RH')
      this.linkVoltar = '/PortaldeApoio/RH'

    else if (this.aviso.modulo == 'Intranet-Merchandising')
      this.linkVoltar = '/PortaldeApoio/Merchandising'

    else if (this.aviso.modulo == 'Intranet-Ti')
      this.linkVoltar = '/PortaldeApoio/Ti'

  }

  ngOnChanges(changes: SimpleChanges): void {
  }
}