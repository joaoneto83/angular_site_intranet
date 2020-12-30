import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { Integrador } from '../../../_models/integrador';

@Injectable({
    providedIn: 'root',
})
export class SiteListaIntegradoresService {
    constructor(private http: HttpClient, handler: HttpBackend) { 
        //this.http = new HttpClient(handler); //Usar apenas quando não chamar o Auth
    }

    getIntegradores(pais:number, uf:string, segmento:string): Observable<Integrador[]> {

        return this.http.get<Integrador[]>(
            `${environment.PORTAL_API}/Integrador/FiltrarIntegradores?idPais=${pais}&uf=${uf}&segmento=${segmento}`);
    }    
}