import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { FormularioQueroComprar } from './formularioQueroComprar';

@Injectable({
    providedIn:'root'
})
export class SiteAutomacaoQueroComprarService {
    constructor(private http: HttpClient, handler: HttpBackend) { 
        //this.http = new HttpClient(handler); //Usar apenas quando não chamar o Auth
    }

    enviarFormulario(formulario: FormularioQueroComprar): Observable<boolean>{
        return this.http.post<boolean>(
            `${environment.PORTAL_API}/Email/QueroComprar`, formulario);
    }
}