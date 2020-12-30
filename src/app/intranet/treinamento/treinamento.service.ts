import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Linha } from '../../../app/_models/linha';
import { DocumentosTreinamento } from './documentos-treinamento';
@Injectable({
    providedIn: 'root',
})
export class TreinamentoService {
    
    constructor(private http: HttpClient) { }

    GetDocumentos(): Observable<Linha[]>{
        return this.http.get<Linha[]>(
            `${environment.PORTAL_API}/Treinamento/GetDocumentos`);
    }

    Salvar(model: DocumentosTreinamento):  Observable<boolean> {
        return this.http.post<boolean>(
            `${environment.PORTAL_API}/Treinamento/Salvar`, model);
    }

}