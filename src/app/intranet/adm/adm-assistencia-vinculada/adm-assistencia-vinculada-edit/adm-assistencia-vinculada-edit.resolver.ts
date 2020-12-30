import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AssistenciaVinculada } from '../assistenciaVinculada';
import { Observable } from 'rxjs';
import { AssistenciaVinculadaService } from '../assistencia-vinculada.service';

@Injectable({providedIn: 'root'})
export class AdmAssistenciaVinculadaEditResolver{

    constructor(private service: AssistenciaVinculadaService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<AssistenciaVinculada> {
        let idAssistencia = route.params.idAssistencia;

        return this.service.getAssistenciaPorId(idAssistencia);
    }
}