import { Injectable, OnInit } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { ResultadoInputBusca } from '../site-dicas-uso/resultadoInputBusca';
import { environment } from '../../../environments/environment';

@Injectable({
    providedIn: 'root',
})
export class SiteBuscaProdutoService  {

    constructor(private http: HttpClient, handler: HttpBackend) { 
        //this.http = new HttpClient(handler); //Usar apenas quando não chamar o Auth
    }

    getResultadoBusca(texto: string): Observable<ResultadoInputBusca[]>{
        return this.http.get<ResultadoInputBusca[]>(
            `${environment.PORTAL_API}/Produto/GetBuscaProdutos/${texto}`);
    }
    
}
