import { PastaTabelaPreco } from './pasta-tabela-preco';
import { TabelaPreco } from './tabela-preco';

export interface ResponseTabelaPreco {
    id: string;
    nome: string;
    ativo: boolean;
    idPai: string;
    tabelaPrecos: TabelaPreco[];
    pastas: PastaTabelaPreco[];
}