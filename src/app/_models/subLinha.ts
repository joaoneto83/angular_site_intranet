import { Produto } from './produto';
import { Classificacao } from '../intranet/_models/classificacao';
import { EspecificacaoTecnica } from './especificacaoTecnica';
import { Arquivo } from "./Arquivo";
import { Banner } from './banner';

export interface SubLinha {
    id: string,
    nomeSubLinha: string,
    codigoSubLinha: string,
    idLinha: string,
    idArquivo: string,
    ativo: boolean,
    produtos: Produto[],
    caminhoImagem: string,
    ordem: number,
    mostraAparelhoIdeal: boolean,
    classificacoes?: Classificacao[],
    especificacoes?: EspecificacaoTecnica[],
    possuiFiltroPilha: boolean,
    arquivo: Arquivo,
    banner: Arquivo,
    banner2: Arquivo,
    textoInformativo: string,
    mostraLink: boolean,
    mostraRota: boolean,
    textoUrl: string,
    textoBotao: string,
    nomeArquivo: string,
    mostraPreco: boolean
}