import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { SubLinha } from '../../../app/_models/subLinha';

@Injectable({
    providedIn: 'root',
})
export class SubLinhaService {
    constructor(private http: HttpClient, handler: HttpBackend) { 
        //this.http = new HttpClient(handler); //Usar apenas quando não chamar o Auth
    }

    getSubLinha(linha:string): Observable<SubLinha[]>{

        return this.http.get<SubLinha[]>(
            `${environment.PORTAL_API}/SubLinha/GetSubLinhasPorLinha/${linha}`);
    }

    getSubLinhaPorCodigoLinha(codigoLinha:string): Observable<SubLinha[]>{

        return this.http.get<SubLinha[]>(
            `${environment.PORTAL_API}/SubLinha/GetSubLinhasPorCodigoLinha/${codigoLinha}`);
    }

    getSubLinhaPorCodigoLinhaIdioma(codigoLinha:string, idioma: number): Observable<SubLinha[]>{

        return this.http.get<SubLinha[]>(
            `${environment.PORTAL_API}/SubLinha/GetSubLinhasPorCodigoLinha/${codigoLinha}?idioma=${idioma}`);
    }

    getSubLinhaComProdutos(codigo:string): Observable<SubLinha[]>{

        return this.http.get<SubLinha[]>(
            `${environment.PORTAL_API}/SubLinha/GetSubLinhasProdutosPorCodigo/${codigo}`);
    }

    getSubLinhaPorCodigo(codigo:string, idioma: number): Observable<SubLinha>{

        return this.http.get<SubLinha>(
            `${environment.PORTAL_API}/SubLinha/GetSubLinhaPorCodigo/${codigo}?idioma=${idioma}`);
    }

    getSubLinhaPorId(id): Observable<SubLinha>{

        return this.http.get<SubLinha>(
            `${environment.PORTAL_API}/SubLinha/GetSubLinha/${id}`);
    }

    salvar(model:SubLinha): Observable<SubLinha>{

        return this.http.post<SubLinha>(
            `${environment.PORTAL_API}/SubLinha/Salvar`, model);
    }
}