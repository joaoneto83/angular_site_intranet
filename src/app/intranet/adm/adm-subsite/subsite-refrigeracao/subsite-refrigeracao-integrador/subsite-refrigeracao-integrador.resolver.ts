import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { IntegradorService } from './integrador.service';
import { Integrador } from '../../../../../_models/integrador';

@Injectable({ providedIn: 'root'})
export class IntegradorResolver implements Resolve<Observable<Integrador[]>>{

    constructor(private service: IntegradorService) {}

    resolve(): Observable<Integrador[]> {
        return this.service.getIntegradores();
    }
}