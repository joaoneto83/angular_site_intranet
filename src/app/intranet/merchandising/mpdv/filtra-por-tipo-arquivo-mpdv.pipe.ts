
import { Pipe, PipeTransform } from '@angular/core';
import { Arquivo } from "../../../_models/Arquivo";

@Pipe({ name: 'FiltraPorTipoArquivoMpdv' })
export class FiltraPorTipoArquivoMpdv implements PipeTransform {

    transform(lista: Arquivo[], descriptionQuery: string) {

        if (lista) {
            if (descriptionQuery)
                return lista.filter(item => item.codigoTipoArquivo == descriptionQuery);
            else
                return lista;
        }

    }

}