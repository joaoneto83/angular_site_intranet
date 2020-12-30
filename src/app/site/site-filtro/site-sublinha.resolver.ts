import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resolve } from '@angular/router';
import { SubLinhaService } from '../../../app/_shared/services/subLinha.service';
import { SubLinha } from '../../../app/_models/subLinha';
import { TraducaoService } from '../_shared/services/traducao.service';

@Injectable({ providedIn: 'root' })
export class SiteSubLinhaResolver implements Resolve<Observable<SubLinha>>{

    constructor(private service: SubLinhaService, private traducao: TraducaoService) { }

    resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): Observable<SubLinha> {
        let codigoSubLinha = route.params.subLinha;
        let idiomaSelecionado = this.traducao.getIdioma()
        let idioma = 1;

        if (route.params.linha == 'Refrigeracao')
            idioma = idiomaSelecionado == 'pt' ? 1 : idiomaSelecionado == 'en' ? 2 : 3;

        return this.service.getSubLinhaPorCodigo(codigoSubLinha, idioma);
    }

}