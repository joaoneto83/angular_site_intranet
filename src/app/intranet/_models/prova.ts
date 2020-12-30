export interface Prova{

    id: string;
    nome: string;
    assuntos: ProvaAssunto[]
}

export interface ProvaAssunto{
    id: string;
    descricao: string;
    questoes: ProvaQuestao[]
}

export interface ProvaQuestao{
    id: string;
    pergunta: string;
    alternativas: ProvaAlternativa[]
}

export interface ProvaAlternativa{
    id: string;
    resposta: string;
    selecionado: boolean;
}