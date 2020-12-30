import { Manual } from './manual';

export interface Card{
    nome: string;
    imagemUrl: string;
    arquivos: Manual[];
    detalhes: any[];
}