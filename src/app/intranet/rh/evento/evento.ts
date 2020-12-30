import { SafeHtml } from '@angular/platform-browser';

export interface Evento{
    id: string,
    titulo: string,
    dataDe: string,
    dataAte: string,
    descricao: string,
    ativo: boolean,
    periodo: string,
    content: SafeHtml
}