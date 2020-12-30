import { HttpClient, HttpBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { FiltroAssistencia } from '../../intranet/adm/adm-assistencia-vinculada/FiltroAssistencia';
import { FiltroAssistencia } from '../../intranet/adm/adm-assistencia/FiltroAssistencia';
//import { RetornoAssistencia } from '../../intranet/adm/adm-assistencia/RetornoAssistencia';
import { Observable } from 'rxjs';
 import { RetornoAssistencia } from '../../intranet/adm/adm-assistencia-vinculada/RetornoAssistencia';
import { EstadoSap } from '../../_models/estadoSap';
import { CidadeSap } from '../../_models/cidadeSap';

@Injectable({
    providedIn: 'root',
})
export class AssistenciaSapService {

    urlLogistica = "http://sap-logisticaapi.elgin.com.br/api/Logistica";
    urlIntegracao = "http://sap-integracaoapi.elgin.com.br/api/Integracao";

    constructor(private http: HttpClient, handler: HttpBackend) { 
        //this.http = new HttpClient(handler); //Usar apenas quando não chamar o Auth
    }

    postEstados(): Observable<EstadoSap[]> {
        return this.http.post<EstadoSap[]>(
            `${this.urlLogistica}/ListarEstado`, null);
    }

    postCidades(uf: number): Observable<CidadeSap[]> {
        return this.http.post<CidadeSap[]>(
            `${this.urlLogistica}/ListarCidadePorUF?codUf=${uf}`, null);
    }

    postAssistencias(filtroAssistencia: FiltroAssistencia): Observable<RetornoAssistencia[]> {
        return this.http.post<RetornoAssistencia[]>(
            `${this.urlIntegracao}/ListarAssistencias`, filtroAssistencia);
    }

}