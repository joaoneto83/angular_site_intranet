import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { Assistencia } from './Assistencia';
import { SolarIntegrador } from 'src/app/intranet/adm/adm-subsite/subsite-solar/solarIntegrador';

@Injectable({
    providedIn: 'root',
})
export class AssistenciaService {
    constructor(private http: HttpClient, handler: HttpBackend) { 
        //this.http = new HttpClient(handler); //Usar apenas quando não chamar o Auth
    }

    getSolarIntegradores(uf: string, cidade: number): Observable<Assistencia[]>{

        return this.http.get<Assistencia[]>(
            `${environment.PORTAL_API}/Assistencia/GetSolarIntegradores/${uf}/${cidade}`);
    }

    getIntegradores(): Observable<SolarIntegrador[]>{
        return this.http.get<SolarIntegrador[]>(
            `${environment.PORTAL_API}/SolarIntegrador/GetIntegradores`);
    }
}