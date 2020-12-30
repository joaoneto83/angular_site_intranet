import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Linha } from '../../../app/_models/linha';

@Injectable({
    providedIn: 'root',
})
export class LinhaService {
    constructor(private http: HttpClient, handler: HttpBackend) { 
        //this.http = new HttpClient(handler); //Usar apenas quando não chamar o Auth
    }

    getLinha(): Observable<Linha[]>{

        return this.http.get<Linha[]>(
            `${environment.PORTAL_API}/Linha/GetLinhas`);
    }

    getLinhaComSubLinhas(possuiMenusEspeciais: boolean): Observable<Linha[]>{

        return this.http.get<Linha[]>(
            `${environment.PORTAL_API}/Linha/GetLinhasComSubLinha/${possuiMenusEspeciais}`);
    }

    getLinhaComTodasSubLinhas(): Observable<Linha[]>{

        return this.http.get<Linha[]>(
            `${environment.PORTAL_API}/Linha/GetLinhasComTodasSubLinhas`);
    }
}