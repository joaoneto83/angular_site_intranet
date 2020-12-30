import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ProvaService } from '../prova.service';
import { Prova } from '../../../_models/prova-oficial';
import { TokenService } from '../../../../_core/services/token.service';

@Injectable({ providedIn: 'root'})
export class ProvaResolver implements Resolve<Observable<Prova>>{

    constructor(private service: ProvaService, private tokenService: TokenService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<Prova> {
        let idAgendamento = route.params.idAgendamento;

        let idUsuario;
        this.tokenService.getUser().subscribe(
            res => idUsuario = res.id
        )
        
        return this.service.abrirProva(idAgendamento, idUsuario);
    }
}