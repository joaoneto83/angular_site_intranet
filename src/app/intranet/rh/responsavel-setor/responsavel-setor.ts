import { SafeHtml } from '@angular/platform-browser';

export interface ResponsavelSetor {
    id: string,
    setor: string,
    nome: string,
    telefone: string,
    telefones: string[],
    ativo: boolean,
    content: SafeHtml
}