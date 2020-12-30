import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Usuario } from 'src/app/site/_models/usuario';
import { TipoDependente } from 'src/app/intranet/_models/tipoDependente';
import { TipoUsuario } from 'src/app/intranet/_models/tipoUsuario';
import { NovaSenha } from 'src/app/intranet/login/novaSenha';
import { Denuncia } from '../_models/denuncia';

@Injectable({
    providedIn: 'root',
})
export class CadastrosExternoService {
    constructor(private http: HttpClient) { }

    getUsuarios(): Observable<Usuario[]>{

        return this.http.get<Usuario[]>(
            `${environment.PORTAL_API}/Usuario`);
    }

    getUsuario(id: string): Observable<Usuario>{

        return this.http.get<Usuario>(
            `${environment.PORTAL_API}/Usuario/${id}`);
    }

    getProtocolo(protocolo: string): Observable<Denuncia>{
        return this.http.get<Denuncia>(
            `${environment.PORTAL_API}/Denuncia/${protocolo}`);
    }
     
    salvar(model: Denuncia): Observable<boolean> {
        return this.http.post<boolean>(
            `${environment.PORTAL_API}/Denuncia`, model);
    }
   
    // salvar(model: FormData): Observable<boolean>{
    //     return this.http.post<boolean>(
    //         `${environment.PORTAL_API}/Denuncia`, model);
    // }
    

    getTiposDependente(): Observable<TipoDependente[]>{

        return this.http.get<TipoDependente[]>(
            `${environment.PORTAL_API}/TipoDependente/Listar`);
    }

 
    // denuncia(model: FormData): Observable<boolean>{
    //     return this.http.post<boolean>(
    //         `${environment.PORTAL_API}/Denuncia/enviarEmail`, model);
    // }

    denuncia(model: Denuncia): Observable<boolean>{
        return this.http.post<boolean>(
            `${environment.PORTAL_API}/Email/Denuncia`, model);
    }

}