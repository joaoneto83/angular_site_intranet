import { Questao } from './questao';

export interface Prova {
    id: string,
    idUltimaAlteracao: string,
    idLinha: string,
    idProduto: string,
    nome: string,
    descricao: string,
    tipoProva: string,
    dataProva: string,
    qtdQuestoes: number,
    tempoRestante: number,
    dataUltimaAlteracao: Date,
    ativo: boolean,
    nomeProduto: string,
    questoes: Questao[],
    provaAtiva: boolean,
    usuarioCorreto: boolean,
    provaRealizada: boolean
}