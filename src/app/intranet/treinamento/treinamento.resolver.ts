import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Linha } from '../../../app/_models/linha';
import { TreinamentoService } from './treinamento.service';

@Injectable({ providedIn: 'root'})
export class TreinamentoResolver implements Resolve<Observable<Linha[]>>{

    constructor(private service: TreinamentoService) {}

    resolve(): Observable<Linha[]> {
        return this.service.GetDocumentos();
    }
}