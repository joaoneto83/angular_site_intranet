import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ProvaService } from '../../prova.service';
import { ProvaUsuario } from '../../../../_models/provaUsuario';
import { TokenService } from '../../../../../_core/services/token.service';

@Injectable({ providedIn: 'root'})
export class ProvaConfirmacaoResolver implements Resolve<Observable<ProvaUsuario>>{

    constructor(private service: ProvaService, private tokenService: TokenService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<ProvaUsuario> {
        let idAgendamento = route.params.idAgendamento;

        let idUsuario;
        this.tokenService.getUser().subscribe(
            res => idUsuario = res.id
        )
        
        return this.service.getAproveitamento(idAgendamento);
    }
}