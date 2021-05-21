interface IEstado {
  nome: string;
  uf: string;
}

export class EstadoRepository {
  private estados: Array<IEstado>;

  constructor() {
    this.estados = require("../../data/estados.json");
  }

  lista(): Array<IEstado> {
    return this.estados;
  }
}