import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { AssistenciaVinculada } from './assistenciaVinculada';
import { AssistenciaVinculadaService } from './assistencia-vinculada.service';
@Injectable({ providedIn: 'root' })
export class AssistenciaVinculadaResolver implements Resolve<Observable<AssistenciaVinculada[]>>{

    constructor(private service: AssistenciaVinculadaService) { }

    resolve(): Observable<AssistenciaVinculada[]> {
        return this.service.getListarAssistencias();
    }
}