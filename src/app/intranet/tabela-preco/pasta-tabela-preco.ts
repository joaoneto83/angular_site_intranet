import { TabelaPreco } from './tabela-preco';

export interface PastaTabelaPreco{
    id: string;
    nome: string;
    ativo: boolean;
    idPai: string;
}