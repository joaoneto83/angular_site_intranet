import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ResponsavelSetor } from './responsavel-setor';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class ResponsavelSetorService {
    constructor(private http: HttpClient) { }

    salvar(model: ResponsavelSetor):  Observable<boolean> {
        return this.http.post<boolean>(
            `${environment.PORTAL_API}/ResponsavelSetor/Salvar`, model);
    }
}