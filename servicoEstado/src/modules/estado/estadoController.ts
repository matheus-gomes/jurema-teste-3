import { Request, Response } from "express";

import { EstadoService } from "./estadoService";

export class EstadoController {
  constructor(private estadoService: EstadoService) { }

  async lista(req: Request, res: Response): Promise<Response> {
    const estados = await this.estadoService.lista();

    return res.json(estados);
  }
}