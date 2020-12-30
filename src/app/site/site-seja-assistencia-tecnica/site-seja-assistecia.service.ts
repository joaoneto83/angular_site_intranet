import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { FormularioAssistenciaTecnica } from './formularioAssistenciaTecnica';

@Injectable({
    providedIn: 'root',
})
export class SiteSejaAssistenciaService {
    constructor(private http: HttpClient, handler: HttpBackend) { 
        //this.http = new HttpClient(handler); //Usar apenas quando não chamar o Auth
    }

    enviarFormulario(formulario: FormularioAssistenciaTecnica): Observable<boolean>{
        return this.http.post<boolean>(
            `${environment.PORTAL_API}/Assistencia/SejaAssistenciaTecnica`, formulario);
    }

}