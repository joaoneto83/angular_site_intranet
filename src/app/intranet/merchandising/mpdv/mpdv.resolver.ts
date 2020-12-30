import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MerchandisingService } from '../merchandising.service';
import { Arquivo } from "../../../_models/Arquivo";

@Injectable({ providedIn: 'root' })
export class MpdvResolver implements Resolve<Observable<Arquivo[]>>{

    constructor(private service: MerchandisingService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Arquivo[]> {
        return this.service.getArquivosMpdv();
    }
}