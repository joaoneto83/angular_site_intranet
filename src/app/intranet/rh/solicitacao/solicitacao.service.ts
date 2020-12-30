import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormularioSolicitacao } from './formularioSolicitacao';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class SolicitacaoService {
    constructor(private http: HttpClient) { }

    enviarFormulario(formulario: FormularioSolicitacao): Observable<boolean>{
        return this.http.post<boolean>(
            `${environment.PORTAL_API}/Email/SolicitacaoRH`, formulario);
    }
}