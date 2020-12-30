import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { Setor } from '../../_models/setor';

@Injectable({
    providedIn: 'root',
})
export class SetorService {
    constructor(private http: HttpClient) { }

    getSetores(): Observable<Setor[]>{

        return this.http.get<Setor[]>(
            `${environment.PORTAL_API}/Setor/GetSetores`);
    }

    getSetor(id: string): Observable<Setor>{

        return this.http.get<Setor>(
            `${environment.PORTAL_API}/Setor/GetSetor/${id}`);
    }
    getSetorCadastros(id: string): Observable<Setor>{

        return this.http.get<Setor>(
            `${environment.PORTAL_API}/Setor/GetSetor/00000000-0000-0000-0000-000000000000`);
    }
}