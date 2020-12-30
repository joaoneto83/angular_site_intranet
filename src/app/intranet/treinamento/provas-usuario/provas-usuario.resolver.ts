import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ProvaService } from '../prova/prova.service';
import { TokenService } from '../../../../app/_core/services/token.service';
import { TreinamentoUsuario } from '../treinamentoUsuario';

@Injectable({ providedIn: 'root'})
export class ProvasUsuarioResolver implements Resolve<Observable<TreinamentoUsuario>>{

    constructor(private service: ProvaService, private tokenService: TokenService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<TreinamentoUsuario> {

        let idUsuario = route.params.idUsuario;

        if(!idUsuario)
        {
            idUsuario = this.tokenService.Id;
        }

        return this.service.getProvaPorUsuario(idUsuario);
    }
} 