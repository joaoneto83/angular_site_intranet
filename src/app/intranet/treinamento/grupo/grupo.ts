import { Usuario } from '../../_models/usuario';

export interface Grupo{
    id: string;
    nomeGrupo: string;
    dataCriacao: string;
    ativo: boolean;
    pessoas: Usuario[];
}