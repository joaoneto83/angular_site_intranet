import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeaderService } from '../../../../../../app/intranet/header/header.service';
import { ProvaUsuario } from '../../../../_models/provaUsuario';

@Component({
    selector: 'app-prova-confirmacao',
    templateUrl: './prova-confirmacao.component.html',
    styleUrls: ['./prova-confirmacao.component.css']
  })
  export class ProvaConfirmacaoComponent implements OnInit {

    aproveitamento: ProvaUsuario;

    constructor(private activatedRoute: ActivatedRoute, private headerService: HeaderService) { 
        this.headerService.menuAtivo('Treinamentos');
        this.aproveitamento = this.activatedRoute.snapshot.data['aproveitamento'];
      }

    ngOnInit(): void {

    }

  }