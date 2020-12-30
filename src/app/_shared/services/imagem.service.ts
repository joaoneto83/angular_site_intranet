import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Banner } from '../../../app/_models/banner';
import { Arquivo } from "../../../app/_models/Arquivo";

@Injectable({
    providedIn: 'root',
})
export class ImagemService {
        
    constructor(private http: HttpClient, handler: HttpBackend) { 
     //   //this.http = new HttpClient(handler); //Usar apenas quando não chamar o Auth
    }

    GetBanners(modulo: string, componente: string): Observable<Banner[]>{

        return this.http.get<Banner[]>(
            `${environment.PORTAL_API}/Imagem/GetBanners/${modulo}/${componente}`);

    }

    GetBannersIdioma(modulo: string, componente: string, idioma): Observable<Banner[]>{

        return this.http.get<Banner[]>(
            `${environment.PORTAL_API}/Imagem/GetBanners/${modulo}/${componente}?idioma=${idioma}`);

    }

    GetImagensPorCodigo(codigo: string): Observable<Arquivo[]>{

        return this.http.get<Arquivo[]>(
            `${environment.PORTAL_API}/Imagem/GetImagens/${codigo}`);

    }

}