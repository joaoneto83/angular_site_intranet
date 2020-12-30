import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Pedido } from '../../_models/pedido';
import { SessaoService } from '../../../_core/sessao/sessao.service';
import { ProdutoService } from '../../../_shared/services/produto.service';
import { PedidoProduto } from '../../_models/pedidoProduto';

@Injectable({ providedIn: 'root'})
export class SiteCarrinhoGelattaResolver implements Resolve<Pedido>{

    constructor(private sessaoService: SessaoService, private produtoService: ProdutoService) {}

    resolve(route: ActivatedRouteSnapshot): Pedido {

        return this.sessaoService.getCarrinho();
    }
}