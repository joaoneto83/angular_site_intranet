import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { TreinamentoMerchan } from './teinamento-merchan';
import { ResponseTreinamentoMerchan } from './response-treinamento-merchan';
import { PastaTreinamentoMerchan } from './pasta-treinamento-merchan';

@Injectable({
    providedIn: 'root',
})
export class TreinamentoMerchanService {
    
    constructor(private http: HttpClient) { }

    getPastas(): Observable<PastaTreinamentoMerchan[]> {
        return this.http.get<PastaTreinamentoMerchan[]>(
            `${environment.PORTAL_API}/Merchandising/ListarPastas`);        
    }

    postEditarTreinamento(treinamento:TreinamentoMerchan): Observable<boolean>{
        return this.http.post<boolean>(
            `${environment.PORTAL_API}/Merchandising/SalvarTreinamento`, treinamento);
    }

    postPastaEditar(pasta: PastaTreinamentoMerchan): Observable<boolean> {
        return this.http.post<boolean>(
            `${environment.PORTAL_API}/Merchandising/SalvarPasta`, pasta);
    }

    getPastaTreinamentoRaiz(): Observable<ResponseTreinamentoMerchan> {
        return this.http.get<ResponseTreinamentoMerchan>(
            `${environment.PORTAL_API}/Merchandising/GetPastaTreinamentoMerchan/`);
    }

    getPastaTreinamentoMerchan(id: string): Observable<ResponseTreinamentoMerchan> {
        return this.http.get<ResponseTreinamentoMerchan>(
            `${environment.PORTAL_API}/Merchandising/GetPastaTreinamentoMerchan/${id}`);
    }

    // addTabelaPreco(): Observable<TreinamentoMerchan>{
    //     return this.http.get<TreinamentoMerchan>(
    //         `${environment.PORTAL_API}/Merchandising/AddTabelaPreco`);
    // }

    mover(id: string, isTreinamento: boolean, idPastaSelecionada: string) {
        return this.http.get<TreinamentoMerchan>(
            `${environment.PORTAL_API}/Merchandising/MoverItem/${id}/${idPastaSelecionada}/${isTreinamento}`);
    }
}