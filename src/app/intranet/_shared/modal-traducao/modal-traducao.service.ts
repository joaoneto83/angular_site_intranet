import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { Traducao } from './traducao';

@Injectable({
    providedIn: 'root',
})
export class TraducaoService {
    constructor(private http: HttpClient) { }

    get(id, metodo): Observable<Traducao[]>{

        return this.http.get<Traducao[]>(
            `${environment.PORTAL_API}/Traducao/${metodo}/${id}`);
    }

    salvar(model: Traducao[]): Observable<boolean>{
        return this.http.post<boolean>(
            `${environment.PORTAL_API}/Traducao/Salvar`, model);
    }
}