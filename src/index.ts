import * as dotenv from "dotenv";
import express from "express";
import cors from "cors";
import helmet from "helmet";
import { AlunosController } from "../src/controllers/alunos.controller";
import { AuthController } from "../src/controllers/auth.controller";
import { EmprestimosController } from "../src/controllers/emprestimos.controller";
import { LivrosController } from "../src/controllers/livros.controller";
import { UsuariosController } from "../src/controllers/usuarios.controller";

dotenv.config();

if (!process.env.PORT) {
  process.exit(1);
}

const PORT: number = parseInt(process.env.PORT as string, 10);
const BASE_URL: string = '/api';

const app = express();

app.use(helmet());
app.use(cors());
app.use(express.json());

app.use(`${BASE_URL}/alunos`, AlunosController);
app.use(`${BASE_URL}/auth`, AuthController);
app.use(`${BASE_URL}/emprestimos`, EmprestimosController);
app.use(`${BASE_URL}/livros`, LivrosController);
app.use(`${BASE_URL}/usuarios`, UsuariosController);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});