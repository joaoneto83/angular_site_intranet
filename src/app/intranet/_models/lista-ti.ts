import { Arquivo } from './arquivo';

export interface ListaTi{
    nome: string;
    imagemUrl?: string;
    categoria: string;
    arquivos: Arquivo[];
}