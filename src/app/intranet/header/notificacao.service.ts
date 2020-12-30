import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Notificacao } from './Notificacao';

@Injectable({
    providedIn: 'root',
})
export class NotificacaoService {
    constructor(private http: HttpClient) { }

    get(idUsuario: string): Observable<Notificacao[]> {

        return this.http.get<Notificacao[]>(
            `${environment.PORTAL_API}/Notificacao/GetNotificacoes/${idUsuario}`);
    }

    visualizar(idUsuario: string): Observable<null> {
        return this.http.get<null>(
            `${environment.PORTAL_API}/Notificacao/VisualizarNotificacoes/${idUsuario}`);

    }

    limpar(idUsuario: string): Observable<null> {
        return this.http.get<null>(
            `${environment.PORTAL_API}/Notificacao/LimparNotificacoes/${idUsuario}`);

    }

}