import { Produto } from './produto';

export interface GrupoDestaque {
    id: string,
    nomeGrupoDestaque: string,
    codigoGrupoDestaque: string,
    ativo: string,
    produtos: Produto[],
}