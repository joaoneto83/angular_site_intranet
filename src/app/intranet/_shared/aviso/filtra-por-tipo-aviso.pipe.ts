import { Pipe, PipeTransform } from '@angular/core';
import { Aviso } from './aviso';

@Pipe({ name: 'FiltraPorTipoAviso' })
export class FiltraPorTipoAviso implements PipeTransform {

    transform(lista: Aviso[], descriptionQuery: string) {

        if (lista) {
            if (descriptionQuery)
                return lista.filter(item => item.codigoTipoAviso == descriptionQuery);
            else
                return lista;
        }

    }

}