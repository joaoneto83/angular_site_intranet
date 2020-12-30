import { Injectable } from '@angular/core';
import { HttpClient, HttpBackend } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../../../environments/environment';
import { PecaReposicao } from '../../../_models/pecaReposicao';

@Injectable({
    providedIn: 'root',
})
export class PecaReposicaoService {
    constructor(private http: HttpClient, handler: HttpBackend) { 
        //this.http = new HttpClient(handler); //Usar apenas quando não chamar o Auth
    }

    getPecasPorProduto(codigo) : Observable<any[]>{

        return this.http.get<any[]>(
            `${environment.PORTAL_API}/PecaReposicao/ListarPorCodigoProduto/${codigo}`);
        
    }

}