import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Merchandising } from './merchandising';
import { Arquivo } from "../../_models/Arquivo";


@Injectable({
    providedIn: 'root',
})
export class MerchandisingService {
    
    constructor(private http: HttpClient) { }

    GetMerchandising(): Observable<Merchandising>{
        return this.http.get<Merchandising>(
            `${environment.PORTAL_API}/Merchandising/GetMerchandising`);
    }

    getArquivosMpdv(): Observable<Arquivo[]>{
        return this.http.get<Arquivo[]>(
            `${environment.PORTAL_API}/Merchandising/GetArquivosMpdv`);
    }

    salvarArquivo(arquivo:Arquivo): Observable<Arquivo>{
        return this.http.post<Arquivo>(
            `${environment.PORTAL_API}/Arquivo/AddArquivo`, arquivo);
    }

    apagarArquivo(idArquivo:string): Observable<boolean>{
        return this.http.get<boolean>(
            `${environment.PORTAL_API}/Arquivo/DelArquivo/${idArquivo}`);
    }

}