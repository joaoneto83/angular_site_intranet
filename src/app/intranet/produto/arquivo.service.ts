import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Arquivo } from "../../../app/_models/Arquivo";
import { Produto } from "../../../app/_models/Produto";
import { TipoArquivo } from '../_models/tipoArquivo';

@Injectable({
    providedIn: 'root',
})
export class ArquivoService {
    constructor(private http: HttpClient) { }

    getTipoArquivos(): Observable<TipoArquivo[]>{

        return this.http.get<TipoArquivo[]>(
            `${environment.PORTAL_API}/Arquivo/GetTipoArquivos`);
    }

    getProduto(): Observable<Produto[]>{

        return this.http.get<Produto[]>(
            `${environment.PORTAL_API}/Arquivo/GetNomeProduto`);
    }

    

    addArquivo(arquivo: Arquivo): Observable<Arquivo>{
        return this.http.post<Arquivo>(
            `${environment.PORTAL_API}/Arquivo/AddArquivo`, arquivo);
    }

    apagarArquivo(idArquivo:string): Observable<string>{

        return this.http.get<string>(
            `${environment.PORTAL_API}/Arquivo/DelArquivo/${idArquivo}`);
    }

    get(){
        return this.http.get<Arquivo[]>(
            `${environment.PORTAL_API}/Arquivo`);
    }
}