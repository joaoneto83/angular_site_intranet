import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AdmUsuarioService } from './adm-usuario.service';
import { TipoUsuario } from '../../_models/tipoUsuario';

@Injectable({ providedIn: 'root'})
export class TiposUsuarioResolver implements Resolve<Observable<TipoUsuario[]>>{

    constructor(private service: AdmUsuarioService) {}

    resolve(): Observable<TipoUsuario[]> {
        return this.service.getTiposUsuario();
    }
}