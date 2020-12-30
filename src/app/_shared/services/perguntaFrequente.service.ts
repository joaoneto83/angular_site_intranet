import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { PerguntaFrequente } from '../../../app/_models/perguntaFrequente';

@Injectable({
    providedIn: 'root',
})
export class PerguntaFrequenteService {
    constructor(private http: HttpClient, handler: HttpBackend) { 
        //this.http = new HttpClient(handler); //Usar apenas quando não chamar o Auth
    }

    getPerguntasFrequentes(codigoComponente:string): Observable<PerguntaFrequente[]>{

        return this.http.get<PerguntaFrequente[]>(
            `${environment.PORTAL_API}/PerguntaFrequente/ListarPorIdProduto/${codigoComponente}`);
    }
}