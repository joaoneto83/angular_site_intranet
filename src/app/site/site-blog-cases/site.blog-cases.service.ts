import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CategoriasBlog } from './categorias-blog';
import { Post2Blog } from './post2-blog';

@Injectable({
    providedIn: 'root',
})
export class SiteBlogCasesService {

    // urlRefrigeracao = "https://public-api.wordpress.com/rest/v1.1/sites/blogelgin.wordpress.com";
    // urlRefrigeracao2 = "https://public-api.wordpress.com/wp/v2/sites/blogelgin.wordpress.com";


    urlRefrigeracao = "https://refrigeracao.blogelgin.site/wp-json/wp/v2";
    urlRefrigeracao2 = "https://refrigeracao.blogelgin.site/wp-json/wp/v2";

     

    urlAutomacao = "https://automacao.blogelgin.site/wp-json/wp/v2";
    urlAutomacao2 = "https://automacao.blogelgin.site/wp-json/wp/v2";

    // urlAutomacao = "https://public-api.wordpress.com/rest/v1.1/sites/blogelgin.wordpress.com";
    // urlAutomacao2 = "https://public-api.wordpress.com/wp/v2/sites/blogelgin.wordpress.com";

    constructor(private http: HttpClient, handler: HttpBackend) {
        //this.http = new HttpClient(handler); //Usar apenas quando não chamar o Auth
    }

    getPost(id: number, codigo: string): any {
        if (codigo == "Refrigeracao")
            return this.http.get<any>(
                `${this.urlRefrigeracao}/posts/${id}`);

        else if (codigo == 'Automacao')
            return this.http.get<any>(
                `${this.urlAutomacao}/posts/${id}`);
    }

    getPostNew(id: number, codigo: string): Observable<Post2Blog> {
        if (codigo == "Refrigeracao")
            return this.http.get<Post2Blog>(
                `${this.urlRefrigeracao2}/posts/${id}`);

        else if (codigo == 'Automacao')
            return this.http.get<Post2Blog>(
                `${this.urlAutomacao2}/posts/${id}`);
    }

    getPostagens(codigo: string): any {
        if (codigo == "Refrigeracao")
            return this.http.get<any>(
                `${this.urlRefrigeracao}/posts?_embed`);

        else if (codigo == 'Automacao')
            return this.http.get<any>(
                `${this.urlAutomacao}/posts?_embed`);
    }

    searchPostagens(texto: string, codigo: string): Observable<any> {
        if (codigo == "Refrigeracao")
            return this.http.get<any>(
                `${this.urlRefrigeracao}/posts/?number=9&search=${texto}`);

        else if (codigo == 'Automacao')
            return this.http.get<any>(
                `${this.urlAutomacao}/posts/?number=9&search=${texto}`);
    }

    morePostagens(linkCarregarMais: string, codigo: string): Observable<any> {
        if (codigo == "Refrigeracao")
            return this.http.get<any>(
                `${this.urlRefrigeracao}/posts/?number=9&${linkCarregarMais}`);

        else if (codigo == 'Automacao')
            return this.http.get<any>(
                `${this.urlAutomacao}/posts/?number=9&${linkCarregarMais}`);
    }

    getCategorias(codigo: string): Observable<CategoriasBlog> {
        if (codigo == "Refrigeracao")
            return this.http.get<CategoriasBlog>(
                `${this.urlRefrigeracao}/categories`);

        else if (codigo == 'Automacao')
            return this.http.get<CategoriasBlog>(
                `${this.urlAutomacao}/categories`);
    }

    getPostsCategoria(categoria: string, codigo: string): any {
        if (codigo == "Refrigeracao")
            return this.http.get<any>(
                `${this.urlRefrigeracao}/posts/?number=9&category=${categoria}`);

        else if (codigo == 'Automacao')
            return this.http.get<any>(
                `${this.urlAutomacao}/posts/?number=9&category=${categoria}`);
    }

    getCases(codigo: string): any {
        if (codigo == "Refrigeracao")
            return this.http.get<any>(
                `${this.urlRefrigeracao}/posts?_embed`);

        else if (codigo == 'Automacao')
            return this.http.get<any>(
                `${this.urlAutomacao}/posts?_embed`);
    }

    getUltimosCases(codigo: string): any {
        if (codigo == 'Refrigeracao')
            return this.http.get<any>(
                `${this.urlRefrigeracao}/posts?_embed`);

        else if (codigo == 'Automacao')
            return this.http.get<any>(
                `${this.urlAutomacao}/posts?_embed`);
    }
}