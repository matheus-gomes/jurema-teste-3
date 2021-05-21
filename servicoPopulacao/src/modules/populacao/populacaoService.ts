import { PopulacaoRepository } from "./populacaoRepository";

export class PopulacaoService {
  constructor(private populacaoRepository: PopulacaoRepository) { }

  listaPorUF(uf: string) {
    const populacao = this.populacaoRepository.listaPorUF(uf);

    if (!populacao) {
      throw new Error(`Populacao do estado ${uf} não encontrada!`);
    }

    return populacao;
  }
}