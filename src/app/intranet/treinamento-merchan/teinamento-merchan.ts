import { Arquivo } from "../../_models/Arquivo";

export interface TreinamentoMerchan{
    id: string;
    nome: string;
    arquivos: Arquivo[];
    ativo: boolean;
    idPastaTreinamentoMerchan: string;
}