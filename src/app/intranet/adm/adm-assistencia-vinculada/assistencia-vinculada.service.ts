import { HttpClient, HttpBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AssistenciaVinculada } from './assistenciaVinculada';
import { environment } from '../../../../environments/environment';
import { RetornoAssistencia } from './RetornoAssistencia';
import { FiltroAssistencia } from './FiltroAssistencia';
import { CidadeSap } from '../../_models/cidadeSap';
import { Cidade } from '../../_models/cidade';
import { listaAssistente } from '../../_models/listaAssistente';

@Injectable({
    providedIn: 'root',
})
export class AssistenciaVinculadaService {

    constructor(private http: HttpClient) { }

    getListarAssistencias(){
        return this.http.get<AssistenciaVinculada[]>(
            `${environment.PORTAL_API}/AssistenciaVinculada/GetAssistenciasVinculadas`);
    }

    getAssistenciaPorId(idAssistencia: string): Observable<AssistenciaVinculada> {
        return this.http.get<AssistenciaVinculada>(
            `${environment.PORTAL_API}/AssistenciaVinculada/GetAssistenciaPorId/${idAssistencia}`);
    }

    postBuscaAssistencias(idLinha: string): Observable<AssistenciaVinculada[]> {
        return this.http.get<AssistenciaVinculada[]>(
            `${environment.PORTAL_API}/Assistencia/GetAssistenciasLinha/${idLinha}`);
    }
    postBuscaAssistenciasLinhaCidade(idLinha: string, uf: string, cidade: string): Observable<listaAssistente[]> {
        return this.http.get<listaAssistente[]>(
            `${environment.PORTAL_API}/Assistencia/GetAssistenciasLinhaCidade/${idLinha}/${uf}/${cidade}`);
    }

    salvar(model: FormData): Observable<boolean> {
        return this.http.post<boolean>(
            `${environment.PORTAL_API}/AssistenciaVinculada/VincularSubLinhas`, model);
    }
    postAssistencias(filtroAssistencia: FiltroAssistencia): Observable<RetornoAssistencia[]> {
        return this.http.post<RetornoAssistencia[]>(
            `${environment.PORTAL_API}/AssistenciaVinculada/ListarAssistencias`, filtroAssistencia);
    }
    postCidades(uf: string): Observable<Cidade[]> {
        return this.http.get<Cidade[]>(
            `${environment.PORTAL_API}/Assistencia/GetCidade/${uf}`);
    }

 
}