import { SafeHtml } from '@angular/platform-browser';

export interface Aviso {
    id: string,
    idTipoAviso: string,
    codigoTipoAviso: string,
    modulo: string,
    titulo: string,
    descricao: string,
    dataAviso: string,
    ativo: boolean,
    content: SafeHtml
}