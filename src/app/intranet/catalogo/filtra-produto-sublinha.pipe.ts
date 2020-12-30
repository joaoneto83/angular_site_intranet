import { Pipe, PipeTransform } from '@angular/core';
import { Produto } from '../../../app/_models/produto';

@Pipe({ name: 'FiltraProdutoSublinha'})
export class FiltraProdutoSublinha implements PipeTransform {

    transform(produtos: Produto[], descriptionQuery: string) {

        if(descriptionQuery == null)
            return produtos.filter(x => x.idSubLinha == null);

        if(descriptionQuery) 
            return produtos.filter(item => item.idSubLinha == descriptionQuery);
        else 
            return produtos;
        
    }

}