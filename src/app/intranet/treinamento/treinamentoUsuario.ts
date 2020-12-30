import { ProvasGrafico } from './provasGrafico';
import { ProvaUsuario } from '../_models/provaUsuario';
import { Usuario } from '../_models/usuario';
import { Grupo } from './grupo/grupo';

export interface TreinamentoUsuario{
    usuario: Usuario;
    provasUsuario: ProvaUsuario[];
    gruposUsuario: Grupo[];
    provasGrafico: ProvasGrafico;
    gruposUsuarioTexto: string;
} 