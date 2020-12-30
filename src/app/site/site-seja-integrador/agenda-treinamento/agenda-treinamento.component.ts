import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SiteSejaIntegradorService } from '../site-seja-integrador.service';
import { FormularioIntegrador } from '../formularioIntegrador';
import { AgendaTreinamento } from './agendaTreinamento';

@Component({
    selector:'app-agenda-treinamento',
    templateUrl: './agenda-treinamento.component.html',
    styleUrls: ['./agenda-treinamento.component.css']
})
export class AgendaTreinamentoComponent implements OnInit {

    form: FormGroup;
    agendaTreinamentos: AgendaTreinamento[] = [];

    constructor(
        private formBuilder: FormBuilder,
        private service: SiteSejaIntegradorService
    ) { }

    ngOnInit(): void {
        this.service.getAgendaTreinamentos().subscribe(
            res => this.agendaTreinamentos = res,
            err => console.log(err)
        );
    }

}