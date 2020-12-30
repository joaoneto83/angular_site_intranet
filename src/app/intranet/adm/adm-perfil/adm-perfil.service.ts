import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { Perfil } from '../../_models/perfil';
import { Menu } from '../../_models/menu';

@Injectable({
    providedIn: 'root',
})
export class PerfilService {
    constructor(private http: HttpClient) { }

    getPerfis(): Observable<Perfil[]>{

        return this.http.get<Perfil[]>(
            `${environment.PORTAL_API}/Perfil/Get`);
    }

    getPerfil(id: string): Observable<Perfil>{

        return this.http.get<Perfil>(
            `${environment.PORTAL_API}/Perfil/Get/${id}`);
    }

    getMenu(id: string): Observable<Menu[]>{

        return this.http.get<Menu[]>(
            `${environment.PORTAL_API}/Perfil/GetMenu/${id}`);
    }

    getMenusFuncionalidades(idPerfil: string): Observable<Menu[]>{

        return this.http.get<Menu[]>(
            `${environment.PORTAL_API}/Perfil/GetMenusFuncionalidades/${idPerfil}`);
    }

    salvar(model: Perfil): Observable<boolean>{

        return this.http.post<boolean>(
            `${environment.PORTAL_API}/Perfil`, model);
    }

}