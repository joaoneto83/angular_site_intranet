import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormularioSugestao } from './formularioSugestao';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class SugestaoService {
    constructor(private http: HttpClient) { }

    enviarFormulario(formulario: FormularioSugestao): Observable<boolean>{
        return this.http.post<boolean>(
            `${environment.PORTAL_API}/Email/SugestaoTI`, formulario);
    }
}