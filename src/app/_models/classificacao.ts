export interface Classificacao{
    id: string;
    nomeClassificacao: string;
    idClassificacaoSuperior?: string;
    filhos: Classificacao[];
    idSubLinha: string;
    selecionado: boolean;
    caminhoImagem: string;
    ativo: boolean;
    comparativo: boolean;
    preco: number;
    ordem: number;
    expansivo: boolean;
}