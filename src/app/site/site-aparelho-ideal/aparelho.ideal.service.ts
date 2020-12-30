import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { AparelhoIdeal } from './aparelhoIdeal';
import { AparelhoIdealResultado } from './aparelhoIdealResultado';

@Injectable({
    providedIn: 'root',
})
export class AparelhoIdealService {
    constructor(private http: HttpClient, handler: HttpBackend) { 
        //this.http = new HttpClient(handler); //Usar apenas quando não chamar o Auth
    }

    retornaAparalhosIdeias(model: AparelhoIdeal): Observable<AparelhoIdealResultado[]>{
        return this.http.post<AparelhoIdealResultado[]>(
            `${environment.PORTAL_API}/Produto/AparelhoIdeal`, model);
    }

}