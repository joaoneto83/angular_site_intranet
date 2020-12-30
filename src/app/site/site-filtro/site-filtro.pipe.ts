import { Pipe, PipeTransform } from '@angular/core';
import { Produto } from '../../../app/_models/produto';

@Pipe({name: 'FiltrarProdutos'})
export class SiteFiltroPipe implements PipeTransform{

    transform(produtos: Produto[], listaIdsClassificacoes: string[]) {
        if(produtos !== undefined && produtos !== null && listaIdsClassificacoes !== undefined && listaIdsClassificacoes !== null)
        {
            let checker = (prod:Produto, target):boolean => target.every(v => {
                return prod.classificacoes.map(a => a.id.toUpperCase()).includes(v.toUpperCase())
            });
            
            return produtos.filter(x => checker(x, listaIdsClassificacoes));
        }
        return produtos;
        
    }

}