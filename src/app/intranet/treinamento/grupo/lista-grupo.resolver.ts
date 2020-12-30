import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Grupo } from './grupo';
import { GrupoService } from './grupo.service';
@Injectable({ providedIn: 'root'})
export class ListaGrupoResolver implements Resolve<Observable<Grupo[]>>{

    constructor(private service: GrupoService) {}

    resolve(): Observable<Grupo[]> {
        return this.service.getGrupos('');
    }
}