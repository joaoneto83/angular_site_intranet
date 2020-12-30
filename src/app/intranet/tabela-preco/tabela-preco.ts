import { Arquivo } from "../../../app/_models/Arquivo";

export interface TabelaPreco{
    id: string;
    nomeTabelaPreco: string;
    arquivos: Arquivo[];
    ativo: boolean;
    idPastaTabelaPreco: string;
}