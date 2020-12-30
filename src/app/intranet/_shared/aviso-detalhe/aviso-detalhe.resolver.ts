import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AvisoService } from '../aviso/aviso.service';
import { Aviso } from '../aviso/aviso';

@Injectable({ providedIn: 'root' })
export class AvisoDetalheResolver implements Resolve<Observable<Aviso>>{

    constructor(private service: AvisoService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Aviso> {
        let idAviso = route.params.idAviso;

        return this.service.getAvisoPorId(idAviso);
    }
}