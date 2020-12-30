import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AssistenciaVinculada } from '../assistenciaVinculada';
import { Observable } from 'rxjs';
import { AssistenciaService } from '../assistencia.service';
import { Assistencia } from '../assistencia';

@Injectable({providedIn: 'root'})
export class AdmAssistenciaEditResolver{

    constructor(private service: AssistenciaService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Assistencia> {
        let idAssistencia = route.params.idAssistencia;

        return this.service.getAssistenciaPorId(idAssistencia);
    }
}