import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AdmUsuarioService } from './adm-usuario.service';
import { TipoDependente } from '../../_models/tipoDependente';

@Injectable({ providedIn: 'root'})
export class TiposDependenteResolver implements Resolve<Observable<TipoDependente[]>>{

    constructor(private service: AdmUsuarioService) {}

    resolve(): Observable<TipoDependente[]> {
        return this.service.getTiposDependente();
    }
}