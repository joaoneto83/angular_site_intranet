import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { FormularioIntegrador } from './formularioIntegrador';
import { AgendaTreinamento } from './agenda-treinamento/agendaTreinamento';

@Injectable({
    providedIn:'root'
})
export class SiteSejaIntegradorService {
    constructor(private http: HttpClient, handler: HttpBackend) { 
        //this.http = new HttpClient(handler); //Usar apenas quando não chamar o Auth
    }

    enviarFormulario(formulario: FormularioIntegrador): Observable<boolean>{
        return this.http.post<boolean>(
            `${environment.PORTAL_API}/Email/SejaIntegrador`, formulario);
    }

    getAgendaTreinamentos(): Observable<AgendaTreinamento[]>{
        return this.http.get<AgendaTreinamento[]>(
            `${environment.PORTAL_API}/AgendaTreinamento/GetAgendaTreinamentos`);
    }
}