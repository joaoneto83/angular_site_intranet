import { Arquivo } from "./Arquivo";
import { Modelo } from './modelo';
import { SecaoProduto } from './secaoProduto';
import { EspecificacaoTecnica } from './especificacaoTecnica';
import { Classificacao } from './classificacao';
import { Caracteristica } from './caracteristica';
import { PalavraChave } from './palavraChave';

export interface Produto{
        id: string,
        nomeProduto: string,
        codigoProduto: string,
        codigoLegado: string,
        idSubLinha: string,
        idLinha: string,
        nomeLinha: string,
        nomeSublinha: string,
        codigoLinha: string,
        codigoSublinha: string,
        imagemUrl: string,
        ativo?: boolean,
        arquivos?: Arquivo[],
        especificacoesTecnicas?: EspecificacaoTecnica[],
        classificacoes: Classificacao[]
        caracteristicas: Caracteristica[],
        secoesProduto: SecaoProduto[],
        modelos: Modelo[],
        palavrasChave: PalavraChave[],
        preco?: number,
        qtdParcelas?: number,
        somenteVista: boolean,
        qtdProduto: number,
        ordem: number,
        selecionado?: boolean
}