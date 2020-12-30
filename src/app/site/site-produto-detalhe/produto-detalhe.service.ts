
import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../environments/environment';
import { Produto } from '../../../app/_models/produto';

@Injectable({
    providedIn: 'root',
})
export class ProdutoDetalheService {
    constructor(private http: HttpClient, handler: HttpBackend) { 
        //this.http = new HttpClient(handler); //Usar apenas quando não chamar o Auth
    }


    getProdutoDetalhe(codigoProduto:string, idioma: number): Observable<Produto>{

        return this.http.get<Produto>(
            `${environment.PORTAL_API}/Produto?produto=${codigoProduto}&ativo=true&idioma=${idioma}`);
    }

}