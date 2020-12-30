import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SubLinha } from '../../_models/subLinha';
import { SubLinhaService } from '../../_shared/services/subLinha.service';

@Injectable({ providedIn: 'root'})
export class SubBlogsResolver implements Resolve<Observable<SubLinha[]>>{

    constructor(private service: SubLinhaService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SubLinha[]> {
        let codigoLinha = route.params.linha;

        if(codigoLinha == undefined)
            codigoLinha = 'Climatizacao';

        return this.service.getSubLinhaComProdutos(codigoLinha);
    }
}