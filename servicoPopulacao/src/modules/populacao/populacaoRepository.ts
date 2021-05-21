interface IPopulacao {
  uf: string;
  populacao: number;
}

export class PopulacaoRepository {
  private populacoes: Array<IPopulacao>;

  constructor() {
    this.populacoes = require("../../data/populacoes.json");
  }

  listaPorUF(uf: string): IPopulacao | undefined {
    return this.populacoes.find((populacao) => populacao.uf.toLowerCase() === uf.toLowerCase());
  }
}