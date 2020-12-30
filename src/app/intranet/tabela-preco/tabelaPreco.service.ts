import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { TabelaPreco } from './tabela-preco';
import { PastaTabelaPreco } from './pasta-tabela-preco';
import { ResponseTabelaPreco } from './response-tabela-preco';

@Injectable({
    providedIn: 'root',
})
export class TabelaPrecoService {
    
    constructor(private http: HttpClient) { }


    getTabelasPreco(): Observable<TabelaPreco[]>{
        return this.http.get<TabelaPreco[]>(
            `${environment.PORTAL_API}/TabelaPreco/GetTabelasPreco`);
    }

    getPastas(): Observable<PastaTabelaPreco[]> {
        return this.http.get<PastaTabelaPreco[]>(
            `${environment.PORTAL_API}/TabelaPreco/ListarPastas`);        
    }

    postNovaTabela(tabela:TabelaPreco): Observable<boolean>{
        return this.http.post<boolean>(
            `${environment.PORTAL_API}/TabelaPreco/Salvar`, tabela);
    }

    postPastaEditar(pasta: PastaTabelaPreco): Observable<boolean> {
        return this.http.post<boolean>(
            `${environment.PORTAL_API}/TabelaPreco/SalvarPasta`, pasta);
    }

    getPastaTabelaPrecoRaiz(): Observable<ResponseTabelaPreco> {
        return this.http.get<ResponseTabelaPreco>(
            `${environment.PORTAL_API}/TabelaPreco/GetPastaTabelaPreco/`);
    }

    getPastaTabelaPreco(id: string): Observable<ResponseTabelaPreco> {
        return this.http.get<ResponseTabelaPreco>(
            `${environment.PORTAL_API}/TabelaPreco/GetPastaTabelaPreco/${id}`);
    }

    addTabelaPreco(): Observable<TabelaPreco>{
        return this.http.get<TabelaPreco>(
            `${environment.PORTAL_API}/TabelaPreco/AddTabelaPreco`);
    }

    mover(id: string, isTabela: boolean, idPastaSelecionada: string) {
        return this.http.get<TabelaPreco>(
            `${environment.PORTAL_API}/TabelaPreco/MoverItem/${id}/${idPastaSelecionada}/${isTabela}`);
    }
}