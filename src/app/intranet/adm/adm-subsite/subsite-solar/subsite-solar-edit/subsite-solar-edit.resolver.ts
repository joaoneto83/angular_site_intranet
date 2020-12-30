import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SolarIntegrador } from '../solarIntegrador';
import { SolarIntegradorService } from '../solar-integrador.service';

@Injectable({ providedIn: 'root' })
export class SubsiteSolarEditResolver implements Resolve<Observable<SolarIntegrador>>{

    constructor(private service: SolarIntegradorService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<SolarIntegrador> {
        let idIntegrador = route.params.idIntegrador;

        return this.service.getIntegradorPorId(idIntegrador);
    }
}