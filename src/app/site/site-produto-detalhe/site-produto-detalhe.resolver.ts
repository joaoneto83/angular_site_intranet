import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { ProdutoDetalheService } from './produto-detalhe.service';
import { Produto } from '../../../app/_models/produto';
import { TraducaoService } from '../_shared/services/traducao.service';

@Injectable({providedIn: 'root'})
export class SiteProdutoDetalheResolver implements Resolve<Observable<Produto>>{

    constructor(private service: ProdutoDetalheService, private traducao: TraducaoService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Produto> {
        let codigoProduto = route.params.codigoProduto;
        let idiomaSelecionado = this.traducao.getIdioma()
        let idioma = 1;

        if (route.params.linha == 'Refrigeracao')
            idioma = idiomaSelecionado == 'pt' ? 1 : idiomaSelecionado == 'en' ? 2 : 3;

        return this.service.getProdutoDetalhe(codigoProduto, idioma);
    }

}