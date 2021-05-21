import { Request, Response } from "express";

import { PopulacaoService } from "./populacaoService";

export class PopulacaoController {
  constructor(private populacaoService: PopulacaoService) { }

  listaPorUF(req: Request, res: Response): Response {
    try {
      const { uf } = req.params;

      const populacao = this.populacaoService.listaPorUF(uf);

      return res.json(populacao);
    } catch (error) {
      return res.status(404).json({ error: error.message });
    }
  }
}