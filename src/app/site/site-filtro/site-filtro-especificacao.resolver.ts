import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { SiteFiltroService } from './site-filtro.service';
import { EspecificacaoTecnica } from '../../_models/especificacaoTecnica';
import { TraducaoService } from '../_shared/services/traducao.service';

@Injectable({providedIn: 'root'})
export class SiteFiltroEspecificacaoResolver implements Resolve<Observable<EspecificacaoTecnica[]>>{

    constructor(private service: SiteFiltroService, private traducao: TraducaoService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<EspecificacaoTecnica[]> {
        let codigoSubLinha = route.params.subLinha;
        let idiomaSelecionado = this.traducao.getIdioma()
        let idioma = 1;

        if (route.params.linha == 'Refrigeracao')
            idioma = idiomaSelecionado == 'pt' ? 1 : idiomaSelecionado == 'en' ? 2 : 3;
        
        return this.service.getEspecificacoes(codigoSubLinha, idioma);
    }
}