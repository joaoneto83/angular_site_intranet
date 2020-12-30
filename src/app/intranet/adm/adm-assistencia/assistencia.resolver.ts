import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { AssistenciaService } from './assistencia.service';
import { Assistencia } from './assistencia';
@Injectable({ providedIn: 'root' })
export class AssistenciaResolver implements Resolve<Observable<Assistencia[]>>{

    constructor(private service: AssistenciaService) { }

    resolve(): Observable<Assistencia[]> {
        return this.service.getListarAssistencias();
    }
}