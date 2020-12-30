import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { PecaReposicaoService } from './peca-reposicao.service';

@Injectable({ providedIn: 'root'})
export class SitePecasReposicaoResolver implements Resolve<Observable<any[]>>{

    constructor(private service: PecaReposicaoService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<any[]> {
        let codigoProduto = route.params.codigoProduto;

        return this.service.getPecasPorProduto(codigoProduto);
    }
}