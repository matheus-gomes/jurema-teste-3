import { EstadoController } from "./estadoController";
import { EstadoRepository } from "./estadoRepository";
import { EstadoService } from "./estadoService";

const estadoRepository = new EstadoRepository();
const estadoService = new EstadoService(estadoRepository);
const estadoController = new EstadoController(estadoService);

export { estadoController };