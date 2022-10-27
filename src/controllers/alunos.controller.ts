import express, { Request, Response } from "express";
import { HttpResponseCodes } from "../models/enums/HttpResponseCodes";
import { Alunos } from "../models/Alunos";

export const AlunosController = express.Router();

AlunosController.get('/', async (req: Request, res: Response) => {
  try {

  }
  catch (e: any) {
    res.status(HttpResponseCodes.INTERNAL_SERVER_ERROR).send(e.message);
  }
});

AlunosController.get('/:id', async (req: Request, res: Response) => {
  try {

  }
  catch (e: any) {
    res.status(HttpResponseCodes.INTERNAL_SERVER_ERROR).send(e.message);
  }
});

AlunosController.post('/', async (req: Request, res: Response) => {
  try {

  }
  catch (e: any) {
    res.status(HttpResponseCodes.INTERNAL_SERVER_ERROR).send(e.message);
  }
});

AlunosController.put('/', async (req: Request, res: Response) => {
  try {

  }
  catch (e: any) {
    res.status(HttpResponseCodes.INTERNAL_SERVER_ERROR).send(e.message);
  }
});

AlunosController.delete('/:id', async (req: Request, res: Response) => {
  try {

  }
  catch (e: any) {
    res.status(HttpResponseCodes.INTERNAL_SERVER_ERROR).send(e.message);
  }
});