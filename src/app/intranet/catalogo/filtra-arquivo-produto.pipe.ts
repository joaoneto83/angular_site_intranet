import { Pipe, PipeTransform } from '@angular/core';
import { Arquivo } from "../../../app/_models/Arquivo";

@Pipe({ name: 'FiltraArquivoProduto'})
export class FiltraArquivoProduto implements PipeTransform {

    transform(arquivos: Arquivo[], descriptionQuery: string): Arquivo{

        if(descriptionQuery == null)
            return arquivos.find(x => x.idPai == null);

        if(descriptionQuery) 
            return arquivos.find(item => item.idPai == descriptionQuery);
        else 
            return arquivos[0];
        
    }

}