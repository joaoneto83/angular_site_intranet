import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { GrupoService } from '../grupo.service';
import { Grupo } from '../grupo';

@Injectable({ providedIn: 'root' })
export class GrupoEditResolver implements Resolve<Observable<Grupo>>{

    constructor(private service: GrupoService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Grupo> {
        let idGrupo = route.params.idGrupo;
        return this.service.getGrupoPorId(idGrupo);
    }
}