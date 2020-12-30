import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Observable } from 'rxjs';

import { CategoriasBlog } from './categorias-blog';
import { Post2Blog } from './post2-blog';

@Injectable({
    providedIn: 'root',
})
export class SiteBlogService {
    // url = "https://public-api.wordpress.com/rest/v1.1/sites/blogelgin.wordpress.com";
    // url2 = "https://public-api.wordpress.com/wp/v2/sites/blogelgin.wordpress.com";

    url = "http://blogelgin.site/admin/wp-json/wp/v2";
    url2 = "http://blogelgin.site/admin/wp-json/wp/v2";

    
    //    url = "https://public-api.wordpress.com/rest/v1.1/sites/elginblogadmin.wordpress.com";
    //     url2 = "https://public-api.wordpress.com/wp/v2/sites/blogelgin.wordpress.com";

    constructor(private http: HttpClient, handler: HttpBackend) { 
        //this.http = new HttpClient(handler); //Usar apenas quando não chamar o Auth
    }

    getPost(id: number): any {
        return this.http.get<any>(
            `${this.url}/posts/${id}`);
    }

    getPostNew(id: number):  Observable<Post2Blog> {
        return this.http.get<Post2Blog>(
            `${this.url2}/posts?_embed/${id}`);
    }

    getPostagens(): any {
        return this.http.get<any>(
            `${this.url}/posts?_embed`);
    }

    searchPostagens(texto: string): Observable<any> {
        return this.http.get<any>(
            `${this.url}/posts/?number=9&search=${texto}`);
    }

    morePostagens(linkCarregarMais: string): Observable<any> {
        return this.http.get<any>(
            `${this.url}/posts/?number=9&${linkCarregarMais}`);
    }

    getCategorias(): Observable<CategoriasBlog>{
        return this.http.get<CategoriasBlog>(
            `${this.url}/categories`);
    }

    getPostsCategoria(categoria: string): any{
        return this.http.get<any>(
            `${this.url}/posts/?number=9&category=${categoria}`);
    }

    getCases(): any {
        return this.http.get<any>(
            `${this.url}/posts/?number=9`);
    }

    getCasesAutomacao(): any {
        return this.http.get<any>(
            `${this.url}/posts/?number=9`);
    }
    getCasesRefrigeracao(): any {
        return this.http.get<any>(
            `${this.url}/posts/?number=9`);
    }
}