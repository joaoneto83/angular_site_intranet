import { Dependente } from './dependente';
import { Arquivo } from '../../_models/Arquivo';

export interface Usuario {
    id: string
    nome: string
    login: string
    senha: string
    email: string
    idPerfil: string
    idArquivo: string
    caminhoFoto: string
    sigla: string
    resetarSenha: boolean
    codigoSenha: string
    ultimoAcesso: Date
    ativo: boolean
    selecionado?: boolean
    nomePerfil: string
    nomeGrupos: string
    dataNascimento: string
    telefone: string
    idSetor: string
    nomeSetor: string
    registro: string

    acessos: string,
    corListaTelefonica?: string

    endereco: string
    bairro: string
    cidade: string
    escolaridade: string
    estadoCivil: string
    comoSerChamado: string
    celular: string
    contatoEmergencia: string
    nomeContatoEmergencia: string,
    emailAniversariante: boolean
    idTipoUsuario: string
    dependentes: Dependente[]
    arquivo: Arquivo
}; 