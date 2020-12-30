import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { Prova } from '../../_models/prova-oficial';
import { Produto } from '../../../../app/_models/produto';
import { Questao } from '../../_models/questao';
import { Alternativa } from '../../_models/alternativa';
import { TokenService } from '../../../../app/_core/services/token.service';
import { ProvaUsuario } from '../../_models/provaUsuario';
import { TreinamentoUsuario } from '../treinamentoUsuario';

@Injectable({
    providedIn: 'root',
})
export class ProvaService {

    constructor(private http: HttpClient, private tokenService: TokenService) { }

    getProvas(): Observable<Prova[]> {
        return this.http.get<Prova[]>(
            `${environment.PORTAL_API}/Prova/GetProvas/`);
    }

    getProvaPorUsuario(idUsuario: string): Observable<TreinamentoUsuario> {
        return this.http.get<TreinamentoUsuario>(
            `${environment.PORTAL_API}/Prova/GetProvasPorUsuario/${idUsuario}`);
    }

    getProvaPorId(idProva: string): Observable<Prova> {
        return this.http.get<Prova>(
            `${environment.PORTAL_API}/Prova/GetProvaPorId/${idProva}`);
    }

    getProdutos(txtBusca: string): Observable<Produto[]> {
        return this.http.get<Produto[]>(
            `${environment.PORTAL_API}/Produto/GetProdutos/${txtBusca}`);
    }

    addProva(idUsuario: string): Observable<Prova> {
        return this.http.get<Prova>(
            `${environment.PORTAL_API}/Prova/AddProva/${idUsuario}`);
    }

    addQuestao(questao: Questao): Observable<Questao> {
        return this.http.post<Questao>(
            `${environment.PORTAL_API}/Prova/AddQuestao/`, questao);
    }

    addAlternativa(alternativa: Alternativa): Observable<Alternativa> {
        return this.http.post<Alternativa>(
            `${environment.PORTAL_API}/Prova/AddAlternativa/`, alternativa);
    }

    salvar(prova: Prova): Observable<boolean> {
        prova.idUltimaAlteracao = this.tokenService.Id;

        return this.http.post<boolean>(
            `${environment.PORTAL_API}/Prova/Salvar/`, prova);
    }

    inativarProva(idProva: string): Observable<boolean> {
        return this.http.get<boolean>(
            `${environment.PORTAL_API}/Prova/InativarProva/${idProva}`);
    }

    abrirProva(idAgendamento: string, idUsuario: string): Observable<Prova> {
        return this.http.get<Prova>(
            `${environment.PORTAL_API}/Prova/AbrirProva/${idAgendamento}/${idUsuario}`);
    }

    finalizarProva(prova: Prova): Observable<boolean> {
        return this.http.post<boolean>(
            `${environment.PORTAL_API}/Prova/FinalizarProva/`, prova);
    }

    getAproveitamento(idAgendamento: string): Observable<ProvaUsuario> {
        return this.http.get<ProvaUsuario>(
            `${environment.PORTAL_API}/Prova/GetAproveitamento/${idAgendamento}`);
    }

    salvarParcial(questao: Questao){
        return this.http.post<ProvaUsuario>(
            `${environment.PORTAL_API}/Prova/SalvarParcial`, questao);
    }
}