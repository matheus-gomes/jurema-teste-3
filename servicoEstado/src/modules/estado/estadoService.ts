import { HttpUtils } from "../../utils/httpUtils";
import { EstadoRepository } from "./estadoRepository";

export class EstadoService {
  constructor(private estadoRepository: EstadoRepository) { }

  async lista() {
    const { estados } = this.estadoRepository.lista();
    console.log(estados)

    const promises = estados.map(async (estado) => {
      return {
        ...estados,
        populacao: await new HttpUtils().request(`/populacao/${estado.uf}`, "GET")
      }
    });

    const resposta = await Promise.all(promises);

    return resposta;
  }
}