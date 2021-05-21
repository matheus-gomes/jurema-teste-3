import express from 'express';

import { populacaoController } from './modules/populacao';

const app = express();

app.use(express.json());

app.get("/populacao/:uf", (req, res) => populacaoController.listaPorUF(req, res));

app.listen(3001, () => console.log("Service is running on port 3001"));