import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { PastaTabelaPreco } from './pasta-tabela-preco';
import { ResponseTabelaPreco } from './response-tabela-preco';
import { TabelaPreco } from './tabela-preco';
import { TabelaPrecoService } from './tabelaPreco.service';

@Injectable({ providedIn: 'root'})
export class TabelaPrecoResolver implements Resolve<Observable<ResponseTabelaPreco>>{

    constructor(private service: TabelaPrecoService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ResponseTabelaPreco> {
        let id = route.params.id;

        if(!id)
            return this.service.getPastaTabelaPrecoRaiz();
        
        return this.service.getPastaTabelaPreco(id);
    }
}