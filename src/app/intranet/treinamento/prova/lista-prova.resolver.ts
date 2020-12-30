import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { ProvaService } from './prova.service';
import { Prova } from '../../_models/prova-oficial';

@Injectable({ providedIn: 'root'})
export class ListaProvaResolver implements Resolve<Observable<Prova[]>>{

    constructor(private service: ProvaService) {}

    resolve(): Observable<Prova[]> {
        return this.service.getProvas();
    }
}