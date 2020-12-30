import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Usuario } from '../../../app/intranet/_models/usuario';
import { UsuarioService } from '../services/usuario.service';

@Injectable({ providedIn: 'root'})
export class UsuarioResolver implements Resolve<Observable<Usuario>>{

    constructor(private service: UsuarioService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Usuario> {

        let idUsuario = route.params.idUsuario;

        return this.service.getUsuario(idUsuario);
    }
} 