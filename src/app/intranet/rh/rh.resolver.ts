import { RH } from './rh';
import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { RHService } from './rh.service';

@Injectable({ providedIn: 'root' })
export class RHResolver implements Resolve<Observable<RH>>{

    constructor(private service: RHService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<RH> {

        return this.service.GetRH();
    }
}