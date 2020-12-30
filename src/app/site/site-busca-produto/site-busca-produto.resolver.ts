import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SiteBuscaProdutoService } from './site-busca-produto.service';
import { ResultadoInputBusca } from '../site-dicas-uso/resultadoInputBusca';
import { LoadingService } from '../../../app/_shared/services/loading.service';

@Injectable({ providedIn: 'root' })
export class SiteBuscaProdutoResolver implements Resolve<Observable<ResultadoInputBusca[]>>{

    constructor(private service: SiteBuscaProdutoService, private loadingService: LoadingService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<ResultadoInputBusca[]> {
        let termo = route.params.termo;
        return this.service.getResultadoBusca(termo);
    }
}