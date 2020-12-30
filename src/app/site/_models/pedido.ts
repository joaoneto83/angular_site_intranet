import { PedidoProduto } from './pedidoProduto';
import { Produto } from '../../_models/produto';

export interface Pedido{
    id: string,
    codigoTipoPagamento: string,
    numeroPedido: number,
    valorTotal: number,
    nomeCompleto: string,
    endereco: string,
    numero: string,
    cep: string,
    cidade: string,
    estado: string,
    bairro: string,
    telefone: string,
    email: string,
    cpf: string,
    rg: string,
    isPessoaFisica: boolean,
    razaoSocial: string,
    cnpj: string,
    inscricaoEstadual: string,
    produtos: Produto[]
}