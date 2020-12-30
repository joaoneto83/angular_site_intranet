import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from '../_models/usuario';
import { AdmUsuarioService } from '../adm/adm-usuario/adm-usuario.service';
import { TokenService } from '../../../app/_core/services/token.service';

@Injectable({ providedIn: 'root'})
export class MeusDadosResolver implements Resolve<Observable<Usuario>>{

    constructor(private service: AdmUsuarioService,
                private tokenService: TokenService) {}

    resolve(): Observable<Usuario> {

        return this.service.getUsuario(this.tokenService.Id);
    }
}