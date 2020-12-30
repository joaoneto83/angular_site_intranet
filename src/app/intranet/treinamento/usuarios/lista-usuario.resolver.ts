import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { LoadingService } from '../../../../app/_shared/services/loading.service';
import { Usuario } from '../../../../app/intranet/_models/usuario';
import { UsuarioService } from './usuario.service';

@Injectable({ providedIn: 'root'})
export class ListaUsuarioResolver implements Resolve<Observable<Usuario[]>>{

    constructor(private service: UsuarioService, private loadingService: LoadingService) {}

    resolve(): Observable<Usuario[]> {
        return this.service.getUsuarios('');
    }
} 