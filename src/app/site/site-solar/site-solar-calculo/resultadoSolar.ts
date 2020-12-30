import { CalculoSolar } from './CalculoSolar';

export interface ResultadoSolar{
    kit1: number;
    kit2: number;
    kitTotal: number;
    kitNecessario: number;
    condicaoSolar: string;
    estimativaArea: number;
    economiaEnergia: number;
    economiaFinanceira: number;
    qtdIntegradores: number;

    email: string;
    nome: string;

    calculo: CalculoSolar;
}