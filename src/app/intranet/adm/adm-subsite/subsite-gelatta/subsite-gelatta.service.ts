import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../../environments/environment';
import { PecaReposicao } from '../../../../_models/pecaReposicao';
import { Produto } from '../../../_models/produto';
import { Arquivo } from '../../../../_models/arquivo';

@Injectable({
    providedIn: 'root',
})
export class SubsiteGelattaService {
    constructor(private http: HttpClient) { }

    getPecasPorProduto(idProduto): Observable<any>{

        return this.http.get<any>(
            `${environment.PORTAL_API}/PecaReposicao/ListarPorIdProduto/${idProduto}`);
    }

    getComboProdutosMaquinaSorvete(): Observable<Produto[]>{

        return this.http.get<Produto[]>(
            `${environment.PORTAL_API}/Produto/GetProdutosPorCodigoLinha/MaquinaSorvete`);
    }

    salvar(pecas: PecaReposicao[], arquivo: Arquivo, idProduto: string): Observable<boolean>{
        let formData = new FormData();

        formData.append("pecas", JSON.stringify(pecas));
        formData.append("arquivo", JSON.stringify(arquivo));
        formData.append("idProduto", idProduto);

        return this.http.post<boolean>(
            `${environment.PORTAL_API}/PecaReposicao/Salvar`, formData);
    }
}