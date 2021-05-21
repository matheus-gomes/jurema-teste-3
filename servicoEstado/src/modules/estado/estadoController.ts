import { Request, Response } from "express";

import { EstadoService } from "./estadoService";

export class EstadoController {
  constructor(private estadoService: EstadoService) { }

  lista(req: Request, res: Response): Response {
    const estados = this.estadoService.lista();

    return res.json(estados);
  }
}