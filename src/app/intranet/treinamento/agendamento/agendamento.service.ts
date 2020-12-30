import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { Agendamento } from '../../_models/agendamento';
import { TokenService } from '../../../../app/_core/services/token.service';
import { AgendamentoUsuario } from '../../_models/agendamentoUsuario';

@Injectable({
    providedIn: 'root',
})
export class AgendamentoService {
    
    constructor(private http: HttpClient, private tokenService: TokenService) { }

    getAgendamentos(): Observable<Agendamento[]>{
        return this.http.get<Agendamento[]>(
            `${environment.PORTAL_API}/Agendamento/GetAgendamentos`);
    }

    inativarAgendamento(idAgendamento: string): Observable<boolean>{
        return this.http.get<boolean>(
            `${environment.PORTAL_API}/Agendamento/InativarAgendamento/${idAgendamento}`);
    }

    getAgendamentoPorId(idAgendamento: any): Observable<Agendamento> {
        return this.http.get<Agendamento>(
            `${environment.PORTAL_API}/Agendamento/GetAgendamentoPorId/${idAgendamento}`);
    }

    getAgendamentoUsuarioPorId(idAgendamentoUsuario: any): Observable<AgendamentoUsuario> {
        return this.http.get<AgendamentoUsuario>(
            `${environment.PORTAL_API}/Agendamento/GetAgendamentoUsuarioPorId/${idAgendamentoUsuario}`);
    }

    salvar(agendamento: Agendamento): Observable<boolean>{
        this.tokenService.getUser().subscribe(
            res => agendamento.idUsuarioAlteracao = res.id
        )

        return this.http.post<boolean>(
            `${environment.PORTAL_API}/Agendamento/Salvar/`, agendamento);
    }
}