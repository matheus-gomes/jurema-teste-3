interface IEstados {
  estados: Array<{
    nome: string;
    uf: string;
  }>
}

export class EstadoRepository {
  private estados: IEstados;

  constructor() {
    this.estados = require("../../data/estados.json");
  }

  lista(): IEstados {
    return this.estados;
  }
}