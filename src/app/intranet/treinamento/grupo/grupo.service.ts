import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { Grupo } from './grupo';
@Injectable({
    providedIn: 'root',
})
export class GrupoService {

    constructor(private http: HttpClient) { }

    getGrupos(termo: string): Observable<Grupo[]> {
        return this.http.get<Grupo[]>(
            `${environment.PORTAL_API}/Grupo/GetGrupos/${termo}`);
    }

    getGrupoPorId(idGrupo: any): Observable<Grupo> {
        return this.http.get<Grupo>(
            `${environment.PORTAL_API}/Grupo/GetGrupoPorId/${idGrupo}`);
    }

    salvar(grupo: Grupo): Observable<boolean> {
        return this.http.post<boolean>(
            `${environment.PORTAL_API}/Grupo/Salvar/`, grupo);
    }

    inativarGrupo(id: string): Observable<boolean>{
        return this.http.get<boolean>(
            `${environment.PORTAL_API}/Grupo/InativarGrupo/${id}`);
    }
}