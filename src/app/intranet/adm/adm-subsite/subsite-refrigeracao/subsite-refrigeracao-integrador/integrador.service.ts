import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../../../environments/environment';
import { Integrador } from '../../../../../_models/integrador';

@Injectable({
    providedIn: 'root',
})
export class IntegradorService {
    
    constructor(private http: HttpClient) { 
        
    }

    getIntegradores(): Observable<Integrador[]>{
        return this.http.get<Integrador[]>(
            `${environment.PORTAL_API}/Integrador/GetIntegradores`);
    }
    
    getIntegradorPorId(idIntegrador: string): Observable<Integrador> {
        return this.http.get<Integrador>(
            `${environment.PORTAL_API}/Integrador/GetIntegradorPorId/${idIntegrador}`);
    }

    salvar(integrador: Integrador) {
        return this.http.post<boolean>(
            `${environment.PORTAL_API}/Integrador/Salvar`, integrador);
    }
    
}