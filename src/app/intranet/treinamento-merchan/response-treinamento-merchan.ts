import { PastaTreinamentoMerchan } from './pasta-treinamento-merchan';
import { TreinamentoMerchan } from './teinamento-merchan';


export interface ResponseTreinamentoMerchan {
    id: string;
    nome: string;
    ativo: boolean;
    idPai: string;
    treinamentos: TreinamentoMerchan[];
    pastas: PastaTreinamentoMerchan[];
}