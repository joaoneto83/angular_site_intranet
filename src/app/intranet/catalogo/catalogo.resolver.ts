import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Catalogo } from './catalogo';
import { CatalogoService } from './catalogo.service';

@Injectable({ providedIn: 'root'})
export class CatalogoResolver implements Resolve<Observable<Catalogo[]>>{

    constructor(private service: CatalogoService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Catalogo[]> {
        
        return this.service.getCatalogos();
    }
}