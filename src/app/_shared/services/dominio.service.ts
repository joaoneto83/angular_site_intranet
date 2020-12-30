import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Estado } from './estado';
import { Cidade } from './cidade';
import { Pais } from './pais';
import { Segmento } from './segmento';
import { TipoEventoRefrigeracao } from '../../_models/tipoEventoRefrigeracao';

@Injectable({
    providedIn: 'root',
})
export class DominioService {
    constructor(private http: HttpClient, handler: HttpBackend) { 
        //this.http = new HttpClient(handler); //Usar apenas quando não chamar o Auth
    }

    getPaises(): Observable<Pais[]>{

        return this.http.get<Pais[]>(
            `${environment.PORTAL_API}/Dominio/GetPaises`);
    }

    getEstados(): Observable<Estado[]>{

        return this.http.get<Estado[]>(
            `${environment.PORTAL_API}/Dominio/GetEstados`);
    }

    getEstadosPorPais(pais:number): Observable<Estado[]>{

        return this.http.get<Estado[]>(
            `${environment.PORTAL_API}/Dominio/GetEstadosPorPais/${pais}`);
    }

    getCidades(estado:string): Observable<Cidade[]>{

        return this.http.get<Cidade[]>(
            `${environment.PORTAL_API}/Dominio/GetCidades/${estado}`);
    }

    getCidade(estado:string): Observable<Cidade[]>{
        return this.http.get<Cidade[]>(
            `${environment.PORTAL_API}/Assistencia/GetCidades/${estado}`);
    }

    getSegmentos(): Observable<Segmento[]>{

        return this.http.get<Segmento[]>(
            `${environment.PORTAL_API}/Dominio/GetSegmentos`);
    }

    getTipoEventos(): Observable<TipoEventoRefrigeracao[]> {

        return this.http.get<TipoEventoRefrigeracao[]>(
            `${environment.PORTAL_API}/Dominio/GetTiposEventoRefrigeracao`);
    }
}