import { HttpClient, HttpBackend } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AssistenciaVinculada } from './assistenciaVinculada';
import { environment } from '../../../../environments/environment';
import { Assistencia } from './assistencia';

@Injectable({
    providedIn: 'root',
})
export class AssistenciaService {

    constructor(private http: HttpClient) { }

    getListarAssistencias(){
        return this.http.get<Assistencia[]>(
            `${environment.PORTAL_API}/Assistencia/Listar`);
    }

    getAssistenciaPorId(idAssistencia: string): Observable<Assistencia> {
        return this.http.get<Assistencia>(
            `${environment.PORTAL_API}/Assistencia/${idAssistencia}`);
    }

    postBuscaAssistencias(idSubLinha: string): Observable<AssistenciaVinculada[]> {
        return this.http.get<AssistenciaVinculada[]>(
            `${environment.PORTAL_API}/AssistenciaVinculada/PostBuscaAssistenciasPorSubLinha/${idSubLinha}`);
    }

    salvar(model: Assistencia): Observable<boolean> {
        return this.http.post<boolean>(
            `${environment.PORTAL_API}/Assistencia`, model);
    }
}