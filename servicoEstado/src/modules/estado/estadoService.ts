import { HttpUtils } from "../../utils/httpUtils";
import { EstadoRepository } from "./estadoRepository";

export class EstadoService {
  constructor(private estadoRepository: EstadoRepository) { }

  async lista() {
    let { estados } = this.estadoRepository.lista();

    const promises = estados.map(async (estado) => {
      const response = await new HttpUtils().request(`/populacao/${estado.uf}`, "GET");
      return {
        ...estado,
        populacao: response.data.populacao
      }
    });

    estados = await Promise.all(promises);

    return { estados };
  }
}