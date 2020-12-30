import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class SiteTrabalheConoscoService {
    constructor(private http: HttpClient, handler: HttpBackend) { 
        //this.http = new HttpClient(handler); //Usar apenas quando não chamar o Auth
    }

    enviarFormulario(formulario: any): Observable<boolean>{
        return this.http.post<boolean>(
            `${environment.PORTAL_API}/Assistencia/SejaAssistenciaTecnica`, formulario);
    }

}