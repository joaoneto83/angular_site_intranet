import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { SolarIntegradorService } from './solar-integrador.service';
import { SolarIntegrador } from './solarIntegrador';

@Injectable({ providedIn: 'root'})
export class SolarResolver implements Resolve<Observable<SolarIntegrador[]>>{

    constructor(private service: SolarIntegradorService) {}

    resolve(): Observable<SolarIntegrador[]> {
        return this.service.getIntegradores();
    }
}