import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { EventoRefrigeracao } from '../../_models/eventoRefrigeracao';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class EventoRefrigeracaoService {
    constructor(private http: HttpClient, handler: HttpBackend) { 
        //this.http = new HttpClient(handler); //Usar apenas quando não chamar o Auth
    }

    getEventos(tipo: number, mes: number, cultura: string): Observable<EventoRefrigeracao[]>{

        return this.http.get<EventoRefrigeracao[]>(
            `${environment.PORTAL_API}/EventoRefrigeracao/FiltrarEventosRefrigeracao?idTipoEventoRefrigeracao=${tipo}&mes=${mes}&cultura=${cultura}`);
    }

    getTodosEventos(cultura: string): Observable<EventoRefrigeracao[]>{

        return this.http.get<EventoRefrigeracao[]>(
            `${environment.PORTAL_API}/EventoRefrigeracao/FiltrarEventosRefrigeracao?cultura=${cultura}`);
    }

    getTodosEventosTreinamento(cultura: string): Observable<EventoRefrigeracao[]>{

        return this.http.get<EventoRefrigeracao[]>(
            `${environment.PORTAL_API}/EventoRefrigeracao/FiltrarEventosRefrigeracao?apenasTreinamentos=true&cultura=${cultura}`);
    }

    getEventosTreinamento(tipo: number, mes: number, cultura: string): Observable<EventoRefrigeracao[]>{

        return this.http.get<EventoRefrigeracao[]>(
            `${environment.PORTAL_API}/EventoRefrigeracao/FiltrarEventosRefrigeracao?idTipoEventoRefrigeracao=${tipo}&mes=${mes}&apenasTreinamentos=true&cultura=${cultura}`);
    }

    getEventosPorId(id: string): Observable<EventoRefrigeracao>{

        return this.http.get<EventoRefrigeracao>(
            `${environment.PORTAL_API}/EventoRefrigeracao/GetEventoRefrigeracaoPorId/${id}`);
    }
}