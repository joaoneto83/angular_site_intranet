import { Merchandising } from './merchandising';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { MerchandisingService } from './merchandising.service';

@Injectable({ providedIn: 'root' })
export class MerchandisingResolver implements Resolve<Observable<Merchandising>>{

    constructor(private service: MerchandisingService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Merchandising> {

        return this.service.GetMerchandising();
    }
}