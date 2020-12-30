import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Agendamento } from '../../../../../app/intranet/_models/agendamento';
import { AgendamentoService } from '../agendamento.service';

@Injectable({ providedIn: 'root' })
export class AgendamentoEditResolver implements Resolve<Observable<Agendamento>>{

    constructor(private service: AgendamentoService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Agendamento> {
        let idAgendamento = route.params.idAgendamento;

        return this.service.getAgendamentoPorId(idAgendamento);
    }
}