import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Produto } from '../../../app/_models/produto';
import { Classificacao } from '../../../app/_models/classificacao';
import { EspecificacaoTecnica } from '../../../app/_models/especificacaoTecnica';

@Injectable({
    providedIn: 'root'
})
export class SiteFiltroService{
    constructor(private http: HttpClient, handler: HttpBackend) { 
        //this.http = new HttpClient(handler); //Usar apenas quando não chamar o Auth
    }

    getClassificacoes(codigoSublinha:string, idioma: number): Observable<Classificacao[]>{

        return this.http.get<Classificacao[]>(
            `${environment.PORTAL_API}/Classificacao/GetClassificacaoPorSublinha/${codigoSublinha}?idioma=${idioma}`);
    }

    getClassificacoesComparativo(codigoSublinha:string, idioma:number): Observable<Classificacao[]>{

        return this.http.get<Classificacao[]>(
            `${environment.PORTAL_API}/Classificacao/GetClassificacaoComparativo/${codigoSublinha}?idioma=${idioma}`);
    }

    getEspecificacoes(codigoSublinha:string, idioma: number): Observable<EspecificacaoTecnica[]>{

        return this.http.get<EspecificacaoTecnica[]>(
            `${environment.PORTAL_API}/EspecificacaoTecnica/ListarEspecificacoesTecnicasComparativo?codigoSublinha=${codigoSublinha}&idioma=${idioma}`);
    }

    getProdutos(codigoSublinha:string, idioma): Observable<Produto[]>{

        return this.http.get<Produto[]>(
            `${environment.PORTAL_API}/Produto/GetProdutosFiltro/${codigoSublinha}?idioma=${idioma}`);
    }
}