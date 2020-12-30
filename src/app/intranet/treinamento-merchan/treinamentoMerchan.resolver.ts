import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ResponseTreinamentoMerchan } from './response-treinamento-merchan';
import { TreinamentoMerchanService } from './treinamentoMerchan.service';

@Injectable({ providedIn: 'root'})
export class TreinamentoMerchanResolver implements Resolve<Observable<ResponseTreinamentoMerchan>>{

    constructor(private service: TreinamentoMerchanService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ResponseTreinamentoMerchan> {
        let id = route.params.id;

        if(!id)
            return this.service.getPastaTreinamentoRaiz();
        
        return this.service.getPastaTreinamentoMerchan(id);
    }
}