import { Arquivo } from './arquivo';

export interface Treinamento{
    nome: string;
    imagemUrl: string;
    categoria: string;
    arquivos: Arquivo[];
}