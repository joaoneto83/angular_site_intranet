import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { ElginNews } from '../../../../app/_models/elginNews';


@Injectable({
    providedIn: 'root',
})
export class AdminElginNewsService {
    
    constructor(private http: HttpClient) { }

    Salvar(model: ElginNews): Observable<boolean>{
        return this.http.post<boolean>(
            `${environment.PORTAL_API}/ElginNews/Salvar`, model);
    }

    Remover(id: string): Observable<boolean>{
        return this.http.get<boolean>(
            `${environment.PORTAL_API}/ElginNews/Remover${id}`);
    }

}