import { Injectable, Inject, PLATFORM_ID } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import * as jwt_decode from 'jwt-decode';
import { environment } from '../../../environments/environment';
import { Usuario } from '../../../app/intranet/_models/usuario';
import { BehaviorSubject } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';

const KEY = 'ElginPortalToken';

@Injectable({
    providedIn: 'root',
})
export class TokenService {

    hasError: boolean;
    Id: string;
    Nome: string;
    Sigla: string;
    CaminhoFoto: string;
    Telefone: string;
    NomeSetor: string;
    Registro: string;
    Acessos: string[];

    private userSubject = new BehaviorSubject<Usuario>(null);

    constructor(private http: HttpClient, handler: HttpBackend, @Inject(PLATFORM_ID) private platformId: Object) {
        ////this.http = new HttpClient(handler); //Usar apenas quando não chamar o Auth

        if (isPlatformBrowser(this.platformId)) {
            this.hasToken() &&
                this.decodeAndNotify();
        }
    }

    hasToken() {
        if (isPlatformBrowser(this.platformId)) {
            return !!this.getToken();
        }
    }

    haveRoles(roles: string[]) {
        let have = false;
        roles.forEach(role => {
            if (this.Acessos.find(x => x.includes(role))) {
                have = true;
            }
        });

        return have;
    }

    getTokenExpirationDate(token: string): Date {
        if (isPlatformBrowser(this.platformId)) {
            const decoded = jwt_decode(token);

            if (decoded.exp === undefined) return null;

            const date = new Date(0);
            date.setUTCSeconds(decoded.exp);
            return date;
        }
    }

    isTokenExpired(token?: string): boolean {
        if (isPlatformBrowser(this.platformId)) {
            if (!token) token = this.getToken();
            if (!token) return true;

            const date = this.getTokenExpirationDate(token);
            if (date === undefined) return false;
            return !(date.valueOf() > new Date().valueOf());
        }
    }

    setToken(usuario, senha) {
        return this.http.post(`${environment.PORTAL_API}/Token`,
            { userID: usuario, password: senha },
            { responseType: "text" });
    }

    getToken() {
        if (isPlatformBrowser(this.platformId)) {
            return window.localStorage.getItem(KEY);
        }
    }

    removeToken() {
        if (isPlatformBrowser(this.platformId)) {
            window.localStorage.removeItem(KEY);
        }
    }

    isLogged() {
        if (isPlatformBrowser(this.platformId)) {
            return !!this.getToken();
        }
    }

    haveAdmin() {
        if (this.Acessos.find(x => x.includes("EDICAO")))
            return true;

        return false;
    }

    getTokenSuccess(token: string) {
        if (isPlatformBrowser(this.platformId)) {
            localStorage.setItem(KEY, token);
            this.decodeAndNotify();
        }
    }

    getUser() {
        return this.userSubject.asObservable();
    }

    getTokenError(err) {
        this.hasError = true;
        console.log('erro obtendo o token: ' + err);
    }

    
    private decodeAndNotify() {
        const token = this.getToken();
        const user = jwt_decode(token) as Usuario;
        this.Id = user.id;
        this.Nome = user.nome;
        this.CaminhoFoto = user.caminhoFoto;
        this.Sigla = user.sigla;
        this.Acessos = user.acessos.split("|");
        this.Telefone = user.telefone;
        this.NomeSetor = user.nomeSetor;
        this.Registro = user.registro;
        this.userSubject.next(user);
    }
}