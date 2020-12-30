import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Menu } from './_models/menu';
import { PerfilService } from './adm/adm-perfil/adm-perfil.service';
import { TokenService } from '../../app/_core/services/token.service';

@Injectable({ providedIn: 'root'})
export class MenuResolver implements Resolve<Observable<Menu[]>>{

    constructor(private service: PerfilService,
                private tokenService: TokenService) {}

    resolve(): Observable<Menu[]> {
        return this.service.getMenu(this.tokenService.Id);
    }
}