import express, { Request, Response } from "express";
import { HttpResponseCodes } from "../models/enums/HttpResponseCodes";
import { Alunos } from "../models/Alunos";
import { AlunosService } from "../services/alunos.service";

export const AlunosController = express.Router();

AlunosController.get('/', async (req: Request, res: Response) => {
  try {
    const alunosService = new AlunosService();

    const alunos = await alunosService.getAll();

    if (alunos)
      res.status(HttpResponseCodes.OK).send(alunos);
    else
      res.status(HttpResponseCodes.NOT_FOUND).send();
  }
  catch (e: any) {
    res.status(HttpResponseCodes.INTERNAL_SERVER_ERROR).send(e.message);
  }
});

AlunosController.get('/:id', async (req: Request, res: Response) => {
  try {
    const alunosService = new AlunosService();

    const aluno = await alunosService.get(parseInt(req.params.id));

    if (aluno)
      res.status(HttpResponseCodes.OK).send(aluno);
    else
      res.status(HttpResponseCodes.NOT_FOUND).send();
  }
  catch (e: any) {
    res.status(HttpResponseCodes.INTERNAL_SERVER_ERROR).send(e.message);
  }
});

AlunosController.post('/', async (req: Request, res: Response) => {
  try {
    const alunosService = new AlunosService();

    const id: number = await alunosService.post(req.body as Alunos);

    res.status(HttpResponseCodes.OK).send(id);
  }
  catch (e: any) {
    res.status(HttpResponseCodes.INTERNAL_SERVER_ERROR).send(e.message);
  }
});

AlunosController.put('/', async (req: Request, res: Response) => {
  try {
    const alunosService = new AlunosService();

    await alunosService.put(req.body as Alunos);

    res.status(HttpResponseCodes.OK).send();
  }
  catch (e: any) {
    res.status(HttpResponseCodes.INTERNAL_SERVER_ERROR).send(e.message);
  }
});

AlunosController.delete('/:id', async (req: Request, res: Response) => {
  try {
    const alunosService = new AlunosService();

    await alunosService.delete(parseInt(req.params.id));

    res.status(HttpResponseCodes.OK).send();
  }
  catch (e: any) {
    res.status(HttpResponseCodes.INTERNAL_SERVER_ERROR).send(e.message);
  }
});