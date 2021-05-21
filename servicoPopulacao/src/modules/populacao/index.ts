import { PopulacaoController } from "./populacaoController";
import { PopulacaoRepository } from "./populacaoRepository";
import { PopulacaoService } from "./populacaoService";

const populacaoRepository = new PopulacaoRepository();
const populacaoService = new PopulacaoService(populacaoRepository);
const populacaoController = new PopulacaoController(populacaoService);

export { populacaoController };