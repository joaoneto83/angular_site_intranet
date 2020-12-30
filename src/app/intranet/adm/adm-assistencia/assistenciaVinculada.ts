import { SubLinha } from '../../../_models/subLinha';
import { RetornoAssistencia } from './RetornoAssistencia';

export interface AssistenciaVinculada{
    
    id: string,
    documento: string,
    ativo: boolean,
    subLinhas: SubLinha[],
    retornoAssistencia: RetornoAssistencia
}