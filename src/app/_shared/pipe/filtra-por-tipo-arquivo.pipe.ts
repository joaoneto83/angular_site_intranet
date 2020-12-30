import { Pipe, PipeTransform } from '@angular/core';
import { Arquivo } from "../../../app/_models/Arquivo";

@Pipe({ name: 'FiltraPorTipoArquivo'})
export class FiltraPorTipoArquivo implements PipeTransform {

    transform(arquivos: Arquivo[], tiposArquivo: string[]) {
        if(arquivos !== undefined && arquivos !== null)
        {
            if(tiposArquivo) 
            {
                return arquivos.filter(item => tiposArquivo.includes(item.codigoTipoArquivo));
            }
            
            return arquivos;
        }
    }

}