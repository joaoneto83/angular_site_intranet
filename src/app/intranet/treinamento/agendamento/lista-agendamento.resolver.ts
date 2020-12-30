import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { AgendamentoService } from './agendamento.service';
import { Agendamento } from '../../_models/agendamento';

@Injectable({ providedIn: 'root'})
export class ListaAgendamentoResolver implements Resolve<Observable<Agendamento[]>>{

    constructor(private service: AgendamentoService) {}

    resolve(): Observable<Agendamento[]> {
        return this.service.getAgendamentos();
    }
}