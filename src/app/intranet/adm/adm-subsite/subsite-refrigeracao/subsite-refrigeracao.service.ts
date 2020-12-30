import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { GrupoDestaque } from '../../../../_models/grupoDestaque';
import { Video } from '../../../../_models/video';
import { LinksGrupoDestaque } from '../../../../_models/linksGrupoDestaque';
import { EventoRefrigeracao } from '../../../../_models/eventoRefrigeracao';

@Injectable({
    providedIn: 'root',
})
export class SubsiteRefrigeracaoService {
    constructor(private http: HttpClient) { }

    getGruposDestaque(modulo): Observable<GrupoDestaque[]> {

        return this.http.get<GrupoDestaque[]>(
            `${environment.PORTAL_API}/GrupoDestaque/GetGruposDestaque/${modulo}`);
    }

    salvar(videos: Video[], grupos: GrupoDestaque[], links: LinksGrupoDestaque): Observable<Video[]> {
        let formData = new FormData();

        formData.append("videos", JSON.stringify(videos));
        formData.append("grupos", JSON.stringify(grupos));
        formData.append("links", JSON.stringify(links));

        return this.http.post<Video[]>(
            `${environment.PORTAL_API}/ConfigRefrigeracao/Salvar`, formData);
    }

    getLinks(): Observable<LinksGrupoDestaque> {

        return this.http.get<LinksGrupoDestaque>(
            `${environment.PORTAL_API}/GrupoDestaque/GetLinksGrupoDestaque`);
    }

    getEventos(): Observable<EventoRefrigeracao[]> {

        return this.http.get<EventoRefrigeracao[]>(
            `${environment.PORTAL_API}/EventoRefrigeracao/GetEventos`);
    }

    salvarEvento(model: EventoRefrigeracao): Observable<boolean> {
        
        return this.http.post<boolean>(
            `${environment.PORTAL_API}/EventoRefrigeracao/Salvar`, model);
    }

    deleteEventos(id: string): Observable<boolean>{

        return this.http.get<boolean>(
            `${environment.PORTAL_API}/EventoRefrigeracao/DeleteEventoRefrigeracao/${id}`);
    }
}