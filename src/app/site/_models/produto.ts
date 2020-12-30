import { LinhaProduto } from './linhaProduto';
import { Modelo } from './modelo';

export interface ProdutoFiltro{
    id: number;
    nome: string;
    imagemUrl: string;
    detalhes: string[];
    linhaProduto?: LinhaProduto;
    modelo?: Modelo;
}