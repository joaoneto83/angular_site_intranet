import { Arquivo } from "../../app/_models/Arquivo";
import { SecaoModeloIcone } from './secaoModeloIcone';

export interface SecaoModelo{
    id: string
  idSecao: string
  idSecaoModeloGrupo: string
    nomeSecao: string
    descricaoModelo: string;
    descricao: string;
    codigoSecao: string
    qtdImagens: number
    qtdIcones: number
    exibeTexto1: string
    exibeTexto2: string
    exibeTexto3: string
    exibeCodigoVideo: string
    exibeCodigoVideo2: string
    exibeCodigoVideo3: string
    exibeCodigoVideo4: string
    exibeAparelhoIdeal: boolean
    idProduto: string
    texto1: string
    texto2: string
    texto3: string
    ordem: number
    ativo: boolean
    codigoVideo:string 
    codigoVideo2:string 
    codigoVideo3:string 
    codigoVideo4:string 
    aparelhoIdeal: boolean
    arquivos: Arquivo[]
    icones: SecaoModeloIcone[]
}
