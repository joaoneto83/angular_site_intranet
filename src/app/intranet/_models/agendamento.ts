import { Prova } from './prova-oficial';

export interface Agendamento {
    id: string,
    idProva: string,
    idUsuarioAlteracao: string,
    idGrupo: string,
    idPessoa: string,
    nomeGrupo: string,
    nomeUsuario: string,
    ativo: boolean,
    qtdQuestoes: number,
    duracao: number,
    descricao: string,
    dataDe: string,
    dataAte: string,
    nomeGrupoPessoa: string,
    tituloProva: string,
    provaStartada: boolean
}