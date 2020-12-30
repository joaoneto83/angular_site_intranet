import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../environments/environment';
import { SolarIntegrador } from './solarIntegrador';


@Injectable({
    providedIn: 'root',
})
export class SolarIntegradorService {
    
    constructor(private http: HttpClient) { 
        
    }

    getIntegradores(): Observable<SolarIntegrador[]>{
        return this.http.get<SolarIntegrador[]>(
            `${environment.PORTAL_API}/SolarIntegrador/GetIntegradores`);
    }
    
    getIntegradorPorId(idIntegrador: string): Observable<SolarIntegrador> {
        return this.http.get<SolarIntegrador>(
            `${environment.PORTAL_API}/SolarIntegrador/GetIntegradorPorId/${idIntegrador}`);
    }

    salvar(integrador: SolarIntegrador) {
        return this.http.post<boolean>(
            `${environment.PORTAL_API}/SolarIntegrador/Salvar`, integrador);
    }
    
}