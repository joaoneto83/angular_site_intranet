import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Contato } from './contato';

@Injectable({
    providedIn: 'root',
})
export class EmailService {
    constructor(private http: HttpClient, handler: HttpBackend) { 
        //this.http = new HttpClient(handler); //Usar apenas quando não chamar o Auth
    }

    getEnviarArquivo(idArquivo: string, idUsuario: string, email: string){
        return this.http.get(
            `${environment.PORTAL_API}/Email/EnviarArquivo/${idArquivo}/${idUsuario}/${email}`);
    }

    enviarContato(contato: Contato){
        return this.http.post(
            `${environment.PORTAL_API}/Email/EnviarContato`, contato);
    }

    enviarContatoIdioma(contato: Contato, idioma: number){
        return this.http.post(
            `${environment.PORTAL_API}/Email/EnviarContato?idioma=${idioma}`, contato);
    }

}