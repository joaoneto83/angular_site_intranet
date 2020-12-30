import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FormularioLojaFuncionario } from './formularioLojaFuncionario';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class LojaFuncionarioService {
    constructor(private http: HttpClient) { }

    enviarFormulario(formulario: FormularioLojaFuncionario): Observable<boolean>{
        return this.http.post<boolean>(
            `${environment.PORTAL_API}/Email/LojaFuncionario`, formulario);
    }
}