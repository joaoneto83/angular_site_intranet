import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ModuloArquivoTi } from './moduloArquivoTi';
import { TiService } from '../ti.service';

@Injectable({ providedIn: 'root' })
export class ModuloArquivoTiResolver implements Resolve<Observable<ModuloArquivoTi[]>> {

    constructor(private service: TiService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ModuloArquivoTi[]> {
        return this.service.getModulosArquivos();
    }

}