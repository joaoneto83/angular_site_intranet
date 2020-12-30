import { Pipe, PipeTransform } from '@angular/core';
import { Linha } from '../../_models/linha';

@Pipe({ name: 'FiltraPorCodigoLinha'})
export class FiltraPorCodigoLinha implements PipeTransform {

    transform(linhas: Linha[], codigosLinha: string[]) {
        if(linhas !== undefined && linhas !== null)
        {
            if(codigosLinha) 
            {
                return linhas.filter(item => codigosLinha.includes(item.codigoLinha))[0];
            }
            
            return null;
        }
    }

}