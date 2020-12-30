import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { LinhaService } from '../../../_shared/services/linha.service';
import { Linha } from '../../../_models/linha';

@Injectable({ providedIn: 'root'})
export class LinhasComSublinhasResolver implements Resolve<Observable<Linha[]>>{

    constructor(private service: LinhaService) {}

    resolve(): Observable<Linha[]> {
        return this.service.getLinhaComTodasSubLinhas();
    }
}