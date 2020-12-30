import { Produto } from './produto';

export interface Classificacao{
    id: string;
    nome: string;
    filhos: Classificacao[];
    produtos: Produto[];
    cor1: string;
    cor2: string;
    corTitulo: string;
    urlImagem?: string;
}