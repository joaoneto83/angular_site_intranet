import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { ResultadoInputBusca } from './resultadoInputBusca';
import { of } from 'rxjs';
import { Postagem } from './Postagem';
import { Post2 } from './post2';
import { CategoriasDicasUso } from './categorias-dicas-uso';

@Injectable({
    providedIn: 'root',
})
export class SiteDicasUsoService {

    constructor(private http: HttpClient, handler: HttpBackend) { 
        //this.http = new HttpClient(handler); //Usar apenas quando não chamar o Auth
    }

    getPost(id: number): any {
        return this.http.get<any>(
            `https://public-api.wordpress.com/rest/v1.1/sites/suporteelgin.wordpress.com/posts/${id}`);
    }

    getPostNew(id: number):  Observable<Post2> {
        return this.http.get<Post2>(
            `https://public-api.wordpress.com/wp/v2/sites/suporteelgin.wordpress.com/posts/${id}`);
    }

    getPostagens(): any {
        return this.http.get<any>(
            `https://public-api.wordpress.com/rest/v1.1/sites/suporteelgin.wordpress.com/posts/?number=9`);
    }

    searchPostagens(texto: string): Observable<any> {
        return this.http.get<any>(
            `https://public-api.wordpress.com/rest/v1.1/sites/suporteelgin.wordpress.com/posts/?number=9&search=${texto}`);
    }

    morePostagens(linkCarregarMais: string): Observable<any> {
        return this.http.get<any>(
            `https://public-api.wordpress.com/rest/v1.1/sites/suporteelgin.wordpress.com/posts/?number=9&${linkCarregarMais}`);
    }

    getCategorias(): Observable<CategoriasDicasUso>{
        return this.http.get<CategoriasDicasUso>(
            `https://public-api.wordpress.com/rest/v1.1/sites/suporteelgin.wordpress.com/categories`);
    }

    getPostsCategoria(categoria: string): any{
        return this.http.get<any>(
            `https://public-api.wordpress.com/rest/v1.1/sites/suporteelgin.wordpress.com/posts/?number=9&category=${categoria}`);
    }

    getResultadoBusca(texto: string): Observable<ResultadoInputBusca[]>{
        return this.http.get<ResultadoInputBusca[]>(
            `${environment.PORTAL_API}/Produto/GetResultadoBusca/${texto}`);
    }
}