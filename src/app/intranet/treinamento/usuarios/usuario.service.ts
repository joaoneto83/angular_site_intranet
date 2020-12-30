import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { Usuario } from '../../_models/usuario';
@Injectable({
    providedIn: 'root',
})
export class UsuarioService {
    
    constructor(private http: HttpClient) { }

    getUsuarios(termo: string): Observable<Usuario[]>{
        return this.http.get<Usuario[]>(
            `${environment.PORTAL_API}/Usuario/GetUsuarios/${termo}`);
    }

}