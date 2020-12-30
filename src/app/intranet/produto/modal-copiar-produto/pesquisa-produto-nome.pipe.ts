import { Pipe, PipeTransform } from '@angular/core';
import { Produto } from '../../../_models/produto';

@Pipe({ name: 'PesquisaProdutoNome' })
export class PesquisaProdutoNome implements PipeTransform {

    transform(produtos: Produto[], descriptionQuery: string) {
        if (produtos) {
            if (descriptionQuery){
                return produtos.filter(item => item.nomeProduto.toLowerCase().includes(descriptionQuery.toLowerCase()));
            }
            else
                return produtos;
        }

    }

}