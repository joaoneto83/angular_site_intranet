import { Funcionalidade } from './funcionalidade';

export interface Menu{
    id: string;
    nome: string;
    codigo: string;
    rota: string;
    ordem: number;
    idMenuPai: string;
    ativo: boolean

    funcionalidades: Funcionalidade[]
    filhos: Menu[]
}