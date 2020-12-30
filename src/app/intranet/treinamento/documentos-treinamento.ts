import { Arquivo } from "../../../app/_models/Arquivo";

export interface DocumentosTreinamento{
    idLinha: string
    idSublinha: string
    idProduto: string
    arquivos: Arquivo[]
}