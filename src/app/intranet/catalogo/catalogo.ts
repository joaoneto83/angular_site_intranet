import { SubLinha } from '../../../app/_models/subLinha';
import { Arquivo } from "../../../app/_models/Arquivo";
import { Produto } from '../../../app/_models/produto';

export interface Catalogo{
    idLinha: string,
    idArquivoLinha: string,
    nomeLinha: string,
    cor1: string,
    cor2: string,
    corTitulo: string,
    urlCatalogoLinha: string,
    nomeArquivoLinha: string,
    subLinhas: SubLinha[],
    produtos: Produto[],
    arquivos: Arquivo[]
}