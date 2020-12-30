import { Alternativa } from './alternativa';

export interface Questao {
    id: string,
    idProva: string,
    descricao: string,
    ativo: boolean,
    alternativas: Alternativa[]
}