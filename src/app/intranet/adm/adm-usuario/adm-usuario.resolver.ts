import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from '../../_models/usuario';
import { AdmUsuarioService } from './adm-usuario.service';

@Injectable({ providedIn: 'root'})
export class AdmUsuarioResolver implements Resolve<Observable<Usuario[]>>{

    constructor(private service: AdmUsuarioService) {}

    resolve(): Observable<Usuario[]> {
        return this.service.getUsuarios();
    }
}