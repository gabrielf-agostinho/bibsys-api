import express, { Request, Response } from "express";
import { HttpResponseCodes } from "../models/enums/HttpResponseCodes";
import { Emprestimos } from "../models/Emprestimos";
import { EmprestimosService } from "../services/emprestimos.service";

export const EmprestimosController = express.Router();

EmprestimosController.get('/', async (req: Request, res: Response) => {
  try {
    const emprestimosService = new EmprestimosService();

    const emprestimos: Array<Emprestimos> | null = await emprestimosService.getAll();

    if (emprestimos != null)
      res.status(HttpResponseCodes.OK).send(emprestimos);
    else
      res.status(HttpResponseCodes.BAD_REQUEST).send();
  }
  catch (e: any) {
    res.status(HttpResponseCodes.INTERNAL_SERVER_ERROR).send(e.message);
  }
});

EmprestimosController.get('/:id', async (req: Request, res: Response) => {
  try {
    const emprestimosService = new EmprestimosService();

    const emprestimo: Emprestimos | null = await emprestimosService.get(parseInt(req.params.id));

    if (emprestimo != null)
      res.status(HttpResponseCodes.OK).send(emprestimo);
    else
      res.status(HttpResponseCodes.BAD_REQUEST).send();
  }
  catch (e: any) {
    res.status(HttpResponseCodes.INTERNAL_SERVER_ERROR).send(e.message);
  }
});

EmprestimosController.post('/', async (req: Request, res: Response) => {
  try {
    const emprestimosService = new EmprestimosService();

    const id: number = await emprestimosService.post(req.body as Emprestimos);

    if (id != 0)
      res.status(HttpResponseCodes.OK).send(id);
    else
      res.status(HttpResponseCodes.BAD_REQUEST).send();
  }
  catch (e: any) {
    res.status(HttpResponseCodes.INTERNAL_SERVER_ERROR).send(e.message);
  }
});

EmprestimosController.put('/', async (req: Request, res: Response) => {
  try {
    const emprestimosService = new EmprestimosService();

    await emprestimosService.put(req.body as Emprestimos);

    res.status(HttpResponseCodes.OK).send();
  }
  catch (e: any) {
    res.status(HttpResponseCodes.INTERNAL_SERVER_ERROR).send(e.message);
  }
});

EmprestimosController.delete('/:id', async (req: Request, res: Response) => {
  try {
    const emprestimosService = new EmprestimosService();

    await emprestimosService.delete(parseInt(req.params.id));

    res.status(HttpResponseCodes.OK).send();
  }
  catch (e: any) {
    res.status(HttpResponseCodes.INTERNAL_SERVER_ERROR).send(e.message);
  }
});