import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { CalculoSolar } from './CalculoSolar';
import { ResultadoSolar } from './resultadoSolar';

@Injectable({
    providedIn: 'root',
})
export class SiteSolarService {
    constructor(private http: HttpClient, handler: HttpBackend) { 
        //this.http = new HttpClient(handler); //Usar apenas quando não chamar o Auth
    }

    retornaCalculoSolar(model: CalculoSolar): Observable<ResultadoSolar>{
        return this.http.post<ResultadoSolar>(
            `${environment.PORTAL_API}/Produto/CalculoSolar`, model);
    }

    postEmail(model: ResultadoSolar): Observable<boolean> {

        return this.http.post<boolean>(
            `${environment.PORTAL_API}/Email/EnviarResultadoSolar`, model);
    }
}