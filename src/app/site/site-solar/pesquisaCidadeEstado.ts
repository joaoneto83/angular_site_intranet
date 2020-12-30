import { Cidade } from '../../../app/_shared/services/cidade';

export interface PesquisaCidadeEstado{
    idCidade: number
    uf: string
    cidades: Cidade[]
}