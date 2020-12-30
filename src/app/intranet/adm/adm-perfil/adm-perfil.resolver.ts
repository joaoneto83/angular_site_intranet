import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Perfil } from '../../_models/perfil';
import { PerfilService } from './adm-perfil.service';

@Injectable({ providedIn: 'root'})
export class PerfilResolver implements Resolve<Observable<Perfil[]>>{

    constructor(private service: PerfilService) {}

    resolve(): Observable<Perfil[]> {
        return this.service.getPerfis();
    }
}