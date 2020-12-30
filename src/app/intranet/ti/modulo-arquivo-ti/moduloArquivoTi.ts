import { Arquivo } from "../../../_models/Arquivo";


export interface ModuloArquivoTi{
    id: string;
    nome: string;
    secao: string;
    ativo: boolean;
    arquivos: Arquivo[];
}