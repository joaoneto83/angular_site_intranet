import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { PropositoService } from './proposito.service';
import { Proposito } from './proposito';

@Injectable({ providedIn: 'root'})
export class PropositoResolver implements Resolve<Observable<Proposito>>{

    constructor(private service: PropositoService ) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Proposito> {
 
        return this.service.getProposito();
    }
}