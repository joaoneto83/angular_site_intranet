import { Pipe, PipeTransform } from '@angular/core';
import { Treinamento } from '../_models/treinamento';

@Pipe({ name: 'FiltraPorClassificacao'})
export class FiltraPorClassificacao implements PipeTransform {

    transform(produtos: Treinamento[], descriptionQuery: string) {

        if(descriptionQuery == null)
            return produtos.filter(x => x.categoria == null);

        if(descriptionQuery) 
            return produtos.filter(item => item.categoria == descriptionQuery);
        else 
            return produtos;
        
    }

}