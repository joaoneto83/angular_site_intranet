import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { Proposito } from './proposito';


@Injectable({
    providedIn: 'root',
})
export class PropositoService {
    
    constructor(private http: HttpClient) { }

    salvar(model: Proposito): Observable<Proposito>{
        return this.http.post<Proposito>(
            `${environment.PORTAL_API}/Proposito/PostSalvarProposito`, model);
    }

    getProposito(): Observable<Proposito>{
        return this.http.get<Proposito>(
            `${environment.PORTAL_API}/Proposito/GetProposito`);
    }

}