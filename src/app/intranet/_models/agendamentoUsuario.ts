export interface AgendamentoUsuario {
    id: string,
    idAgendamento: string,
    idUsuario: string,
    idProva: string,
    nota: number,
    inicioProva: string,
    terminoProva: string,
    dtInicioProva?: Date,
    dtTerminoProva?: Date,
    dataDe: Date,
    dataAte: Date,
    qtdQuestoes: number,
    duracao: number,
    nome: string,
    descricao: string,
    provaIniciada: boolean;
    provaRealizada: boolean;
    podeIniciarProva: boolean;
    provaFinalizada: boolean;
  }