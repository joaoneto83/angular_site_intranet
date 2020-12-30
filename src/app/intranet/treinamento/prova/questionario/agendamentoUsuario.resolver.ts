import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { TokenService } from '../../../../_core/services/token.service';
import { AgendamentoUsuario } from '../../../../../app/intranet/_models/agendamentoUsuario';
import { AgendamentoService } from '../../agendamento/agendamento.service';

@Injectable({ providedIn: 'root'})
export class AgendamentoUsuarioResolver implements Resolve<Observable<AgendamentoUsuario>>{

    constructor(private service: AgendamentoService, private tokenService: TokenService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<AgendamentoUsuario> {
        let idAgendamentoUsuario = route.params.idAgendamentoUsuario;
        
        return this.service.getAgendamentoUsuarioPorId(idAgendamentoUsuario);
    }
}