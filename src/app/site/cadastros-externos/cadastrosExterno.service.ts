import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Usuario } from 'src/app/site/_models/usuario';
import { TipoDependente } from 'src/app/intranet/_models/tipoDependente';
import { TipoUsuario } from 'src/app/intranet/_models/tipoUsuario';
import { NovaSenha } from 'src/app/intranet/login/novaSenha';

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

    resetarSenha(login: string): Observable<boolean>{

        return this.http.get<boolean>(
            `${environment.PORTAL_API}/Usuario/ResetarSenha/${login}`);
    }

    validarCodigo(login: string, codigo: string): Observable<string>{

        return this.http.get<string>(
            `${environment.PORTAL_API}/Usuario/validarCodigo/${login}/${codigo}`);
    }

    alterarSenha(model: NovaSenha): Observable<boolean>{

        return this.http.post<boolean>(
            `${environment.PORTAL_API}/Usuario/AlterarSenha`, model);
    }

    validaLogin(model: Usuario): Observable<boolean>{

        return this.http.post<boolean>(
            `${environment.PORTAL_API}/Usuario/ValidaLogin`, model);
    }


    salvar(model: FormData): Observable<boolean>{

        return this.http.post<boolean>(
            `${environment.PORTAL_API}/Usuario/Salvar`, model);
    }

    getTiposUsuario(): Observable<TipoUsuario[]>{

        return this.http.get<TipoUsuario[]>(
            `${environment.PORTAL_API}/TipoUsuario/Listar`);
    }

    getTiposDependente(): Observable<TipoDependente[]>{

        return this.http.get<TipoDependente[]>(
            `${environment.PORTAL_API}/TipoDependente/Listar`);
    }

    novoUsuario(model: FormData): Observable<boolean>{
        return this.http.post<boolean>(
            `${environment.PORTAL_API}/Email/NovoUsuario`, model);
    }
}