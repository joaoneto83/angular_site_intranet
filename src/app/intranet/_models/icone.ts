import { Arquivo } from './arquivo';

export interface Icone{
    nome: string;
    arquivos: Arquivo[];
    imagemUrl: string;
}