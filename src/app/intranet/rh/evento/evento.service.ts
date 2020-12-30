import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Evento } from './evento';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
    providedIn: 'root'    
})
export class EventoService {
    constructor(private http: HttpClient) { }

    salvar(model: Evento):  Observable<boolean> {
        return this.http.post<boolean>(
            `${environment.PORTAL_API}/Evento/Salvar`, model);
    }
}