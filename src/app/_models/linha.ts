import { SubLinha } from './subLinha';
import { Arquivo } from "./Arquivo";

export interface Linha {
    id: string,
    nomeLinha: string,
    codigoLinha: string,
    cor1: string,
    cor2: string,
    corTitulo: string,
    ativo: boolean,
    ordem: number,

    showMobile: boolean;
    subLinhas: SubLinha[]
    arquivos: Arquivo[]
}