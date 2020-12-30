import { IconeSegmento } from './iconeSegmento';

export interface ConteudoSegmento {
    codigoBanner: string;
    codigoGrupo: string;
    codigoSegmento: string;
    titulo: string;
    subtitulo: string;
    textoDestaque: string;
    texto: string;
    icones: IconeSegmento[];
}