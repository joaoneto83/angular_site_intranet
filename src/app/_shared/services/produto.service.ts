import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Produto } from '../../../app/_models/produto';
import { EspecificacaoTecnica } from '../../_models/especificacaoTecnica';

@Injectable({
    providedIn: 'root',
})
export class ProdutoService {
    constructor(private http: HttpClient, handler: HttpBackend) { 
        //this.http = new HttpClient(handler); //Usar apenas quando não chamar o Auth
    }

    get(id:string): Observable<Produto>{

        return this.http.get<Produto>(
            `${environment.PORTAL_API}/Produto?produto=${id}`);
    }

    getIdioma(id:string, idioma: number): Observable<Produto>{

        return this.http.get<Produto>(
            `${environment.PORTAL_API}/Produto?produto=${id}&idioma=${idioma}`);
    }

    getListaEspecificacoesTecnicas(idSublinha:string, idProduto:string): Observable<EspecificacaoTecnica[]>{
        return this.http.get<EspecificacaoTecnica[]>(
            `${environment.PORTAL_API}/EspecificacaoTecnica/ListarEspecificacoesTecnicas?IdSublinha=${idSublinha}&IdProduto=${idProduto}`);
    }
    getProdutos(codigoSublinha:string): Observable<Produto[]>{

        return this.http.get<Produto[]>(
            `${environment.PORTAL_API}/Produto/GetProdutosFiltro/${codigoSublinha}?idioma=1`);
    }

    getProdutosPorLinha(idLinha)
    {
        return this.http.get<Produto[]>(
            `${environment.PORTAL_API}/Produto/GetProdutosLinha/${idLinha}`);
        
    }

    getProdutosPorSubLinha(idSubLinha)
    {
        return this.http.get<Produto[]>(
            `${environment.PORTAL_API}/Produto/GetProdutosSubLinha/${idSubLinha}`);
        
    }

    getProdutosPorSubLinhaIdioma(idSubLinha, idioma)
    {
        return this.http.get<Produto[]>(
            `${environment.PORTAL_API}/Produto/GetProdutosSubLinha/${idSubLinha}?idioma=${idioma}`);
        
    }

    getProdutosPorCodigoLinha(codigoLinha)
    {
        return this.http.get<Produto[]>(
            `${environment.PORTAL_API}/Produto/GetProdutosFiltroPorCodigoLinha/${codigoLinha}`);
        
    }
}