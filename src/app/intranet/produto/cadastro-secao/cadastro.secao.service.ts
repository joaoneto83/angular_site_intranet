import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { Secao } from './secao';
import { SecaoProduto } from '../../../../app/_models/secaoProduto';
import { Arquivo } from "../../../../app/_models/Arquivo";

@Injectable({
    providedIn: 'root',
})
export class CadastroSecaoService {
    constructor(private http: HttpClient) { }

    getSecoes(): Observable<Secao[]>{
        return this.http.get<Secao[]>(
            `${environment.PORTAL_API}/Produto/Secoes`);
    }

    getSecoesProduto(idProduto: string): Observable<SecaoProduto[]>{
        return this.http.get<SecaoProduto[]>(
            `${environment.PORTAL_API}/Produto/SecoesProduto/${idProduto}`);
    }

    addSecaoProduto(secao: SecaoProduto): Observable<SecaoProduto>{
        return this.http.post<SecaoProduto>(
            `${environment.PORTAL_API}/Produto/AddSecaoProduto`, secao);
    }

    delSecaoProduto(id: string): Observable<boolean>{
        return this.http.delete<boolean>(
            `${environment.PORTAL_API}/Produto/DelSecoesProduto/${id}`);
    }

    addImagemSecaoProduto(arquivo: Arquivo): Observable<Arquivo>{
        return this.http.post<Arquivo>(
            `${environment.PORTAL_API}/Produto/AddImagemSecaoProduto`, arquivo);
    }

    delImagemSecaoProduto(id: string): Observable<boolean>{
        return this.http.delete<boolean>(
            `${environment.PORTAL_API}/Produto/DelImagemSecaoProduto/${id}`);
    }
}