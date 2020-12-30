import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Prova } from '../../../../intranet/_models/prova-oficial';
import { ProvaService } from '../prova.service';
import { Usuario } from '../../../../../app/intranet/_models/usuario';
import { TokenService } from '../../../../../app/_core/services/token.service';

@Injectable({ providedIn: 'root' })
export class ProvaEditResolver implements Resolve<Observable<Prova>>{

    constructor(private service: ProvaService, private tokenService: TokenService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Prova> {
        let idProva = route.params.idProva;
        if (idProva == undefined) {
            let usuario: Usuario;

            this.tokenService.getUser().subscribe(
                res => usuario = res
            )
            return this.service.addProva(usuario.id);
        }
        else {
            return this.service.getProvaPorId(idProva);
        }
    }
}