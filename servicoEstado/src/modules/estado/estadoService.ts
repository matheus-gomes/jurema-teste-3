import { EstadoRepository } from "./estadoRepository";

export class EstadoService {
  constructor(private estadoRepository: EstadoRepository) { }

  lista() {
    return this.estadoRepository.lista();
  }
}