import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resolve } from '@angular/router';
import { Produto } from '../../../app/_models/produto';
import { SiteFiltroService } from './site-filtro.service';
import { TraducaoService } from '../_shared/services/traducao.service';

@Injectable({providedIn: 'root'})
export class SiteProdutoResolver implements Resolve<Observable<Produto[]>>{

    constructor(private service: SiteFiltroService, private traducao: TraducaoService) {}

    resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): Observable<Produto[]> {
        let codigoSubLinha = route.params.subLinha;
        let idiomaSelecionado = this.traducao.getIdioma()
        let idioma = 1;

        if (route.params.linha == 'Refrigeracao')
            idioma = idiomaSelecionado == 'pt' ? 1 : idiomaSelecionado == 'en' ? 2 : 3;

        return this.service.getProdutos(codigoSubLinha, idioma);
    }

}