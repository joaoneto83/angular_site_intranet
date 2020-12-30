import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { GrupoDestaque } from '../../_models/grupoDestaque';
import { Video } from '../../_models/video';
import { LinksGrupoDestaque } from '../../_models/linksGrupoDestaque';

@Injectable({
    providedIn: 'root',
})
export class SiteRefrigeracaoService {
    constructor(private http: HttpClient, handler: HttpBackend) { 
        //this.http = new HttpClient(handler); //Usar apenas quando não chamar o Auth
    }

    getGrupoDestaqueProduto(modulo, idioma): Observable<GrupoDestaque[]> {

        return this.http.get<GrupoDestaque[]>(
            `${environment.PORTAL_API}/GrupoDestaque/GetGrupoDestaqueProduto/${modulo}?idioma=${idioma}`);
    }

    getGrupoDestaquePorCodigo(codigo, idioma): Observable<GrupoDestaque> {

        return this.http.get<GrupoDestaque>(
            `${environment.PORTAL_API}/GrupoDestaque/GetGrupoDestaquePorCodigo/${codigo}?idioma=${idioma}`);
    }

    getLinks(): Observable<LinksGrupoDestaque> {

        return this.http.get<LinksGrupoDestaque>(
            `${environment.PORTAL_API}/GrupoDestaque/GetLinksGrupoDestaque`);
    }
}