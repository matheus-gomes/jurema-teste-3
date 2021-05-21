import express from 'express';

import { estadoController } from './modules/estado';

const app = express();

app.use(express.json());

app.get("/estados", (req, res) => estadoController.lista(req, res));

app.listen(3000, () => console.log("Service is running on port 3000"));