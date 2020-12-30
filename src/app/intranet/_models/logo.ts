import { Arquivo } from './arquivo';

export interface Logo{
    nome: string;
    arquivos: Arquivo[];
    imagemUrl: string;
}