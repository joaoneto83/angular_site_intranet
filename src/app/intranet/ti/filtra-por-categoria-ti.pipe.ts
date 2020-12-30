import { Pipe, PipeTransform } from '@angular/core';
import { ModuloArquivoTi } from './modulo-arquivo-ti/moduloArquivoTi';

@Pipe({ name: 'FiltraPorCategoriaTi'})
export class FiltraPorCategoriaTi implements PipeTransform {

    transform(lista: ModuloArquivoTi[], descriptionQuery: string) {

        if(descriptionQuery == null)
            return lista.filter(x => x.secao == null);

        if(descriptionQuery) 
            return lista.filter(item => item.secao == descriptionQuery);
        else 
            return lista;
        
    }

}