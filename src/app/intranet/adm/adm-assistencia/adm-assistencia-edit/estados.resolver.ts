import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { DominioService } from '../../../../_shared/services/dominio.service';
import { Estado } from '../../../../_shared/services/estado';

@Injectable({ providedIn: 'root' })
export class EstadosResolver implements Resolve<Observable<Estado[]>>{

    constructor(private service: DominioService) { }
    
    resolve(): Observable<Estado[]> {
        return this.service.getEstados();
    }
}