import express, { Request, Response } from "express";
import { HttpResponseCodes } from "../models/enums/HttpResponseCodes";
import { Livros } from "../models/Livros";
import { LivrosService } from "../services/livros.service";

export const LivrosController = express.Router();

LivrosController.get('/', async (req: Request, res: Response) => {
  try {
    const livrosService = new LivrosService();

    const livros = await livrosService.getAll();

    if (livros)
      res.status(HttpResponseCodes.OK).send(livros);
    else
      res.status(HttpResponseCodes.NOT_FOUND).send();
  }
  catch (e: any) {
    res.status(HttpResponseCodes.INTERNAL_SERVER_ERROR).send(e.message);
  }
});

LivrosController.get('/:id', async (req: Request, res: Response) => {
  try {
    const livrosService = new LivrosService();

    const livro = await livrosService.get(parseInt(req.params.id));

    if (livro)
      res.status(HttpResponseCodes.OK).send(livro);
    else
      res.status(HttpResponseCodes.NOT_FOUND).send();
  }
  catch (e: any) {
    res.status(HttpResponseCodes.INTERNAL_SERVER_ERROR).send(e.message);
  }
});

LivrosController.post('/', async (req: Request, res: Response) => {
  try {
    const livrosService = new LivrosService();

    const livro: Livros = livrosService.parseLivro(req.body as Livros);

    const id: number = await livrosService.post(livro);

    if (id != 0)
      res.status(HttpResponseCodes.OK).send(id);
    else
      res.status(HttpResponseCodes.BAD_REQUEST).send();
  }
  catch (e: any) {
    res.status(HttpResponseCodes.INTERNAL_SERVER_ERROR).send(e.message);
  }
});

LivrosController.put('/', async (req: Request, res: Response) => {
  try {
    const livrosService = new LivrosService();

    const livro: Livros = livrosService.parseLivro(req.body as Livros);

    await livrosService.put(livro);

    res.status(HttpResponseCodes.OK).send();
  }
  catch (e: any) {
    res.status(HttpResponseCodes.INTERNAL_SERVER_ERROR).send(e.message);
  }
});

LivrosController.delete('/:id', async (req: Request, res: Response) => {
  try {
    const livrosService = new LivrosService();

    await livrosService.delete(parseInt(req.params.id));

    res.status(HttpResponseCodes.OK).send();
  }
  catch (e: any) {
    res.status(HttpResponseCodes.INTERNAL_SERVER_ERROR).send(e.message);
  }
});