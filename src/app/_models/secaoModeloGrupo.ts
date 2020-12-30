
export interface SecaoModeloGrupo {
    id: string,
    descricao: string,
  ativo: boolean,
  idProdutos: SecaoModeloGrupoProduto[],
  constructor()
};

export interface SecaoModeloGrupoProduto {
  id: string,
  ativo: boolean,
  constructor()
};
