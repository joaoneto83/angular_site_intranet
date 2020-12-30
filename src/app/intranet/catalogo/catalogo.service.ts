import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Catalogo } from './catalogo';
import { Arquivo } from "../../../app/_models/Arquivo";

@Injectable({
    providedIn: 'root',
})
export class CatalogoService {
    constructor(private http: HttpClient) { }

    getCatalogos(): Observable<Catalogo[]>{
        return this.http.get<Catalogo[]>(
            `${environment.PORTAL_API}/Catalogo/GetCatalogos`);
    }

    postSalvarArquivo(arquivo:Arquivo): Observable<boolean>{
        return this.http.post<boolean>(
            `${environment.PORTAL_API}/Catalogo/PostArquivoCatalogo`, arquivo);
    }

    apagarArquivo(idArquivo:string): Observable<string>{
        return this.http.get<string>(
            `${environment.PORTAL_API}/Arquivo/DelArquivo/${idArquivo}`);
    }
}