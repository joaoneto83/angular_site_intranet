import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Produto } from '../../_models/produto';
import { EspecificacaoTecnica } from '../../_models/especificacaoTecnica';

@Injectable({
    providedIn: 'root',
})
export class AdminBlogsService {
    constructor(private http: HttpClient) { }

    salvar(model: Produto): Observable<boolean> {

        return this.http.post<boolean>(
            `${environment.PORTAL_API}/Produto/Salvar`, model);
    }

    postNovoProduto(produto: Produto): Observable<string> {

        return this.http.post<string>(
            `${environment.PORTAL_API}/Produto/SalvarNovoProduto/`,
            {
                id: produto.id,
                nomeProduto: produto.nomeProduto,
                codigoProduto: produto.codigoProduto,
                codigoLegado: produto.codigoLegado,
                idSubLinha: produto.idSubLinha,
                ativo: true
            });
    }

    getProdutosCopiar(sublinha: string): Observable<Produto[]> {

        return this.http.get<Produto[]>(
            `${environment.PORTAL_API}/Produto/GetProdutosFiltro/${sublinha}?idioma=1`);
    }

    copiarProduto(produto, idProdutoDestino): Observable<boolean> {
        let formData = new FormData();

        formData.append("produto", JSON.stringify(produto));
        formData.append("idProdutoDestino", JSON.stringify(idProdutoDestino));

        let obj ={
            produto,
            idProdutoDestino
        }

        return this.http.post<boolean>(
            `${environment.PORTAL_API}/Produto/CopiarProduto`, formData);
    }
}