import { Imagem } from './imagem';
import { SubLinha } from '../../../app/_models/subLinha';
import { Arquivo } from "../../../app/_models/Arquivo";

export interface Produto{
    id: string;
    nome: string;
    codigo: string;
    classificacao_1: string;
    classificacao_2: string;
    manuais: Arquivo[];
    treinamentos: Arquivo[];
    materiaisApoio: Arquivo[];
    certificados: Arquivo[];
    fotos: Imagem[]
    subLinha?: SubLinha;
}