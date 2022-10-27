import express, { Request, Response } from "express";
import { HttpResponseCodes } from "../models/enums/HttpResponseCodes";
import { Emprestimos } from "../models/Emprestimos";

export const EmprestimosController = express.Router();

EmprestimosController.get('/', async (req: Request, res: Response) => {
  try {

  }
  catch (e: any) {
    res.status(HttpResponseCodes.INTERNAL_SERVER_ERROR).send(e.message);
  }
});

EmprestimosController.get('/:id', async (req: Request, res: Response) => {
  try {

  }
  catch (e: any) {
    res.status(HttpResponseCodes.INTERNAL_SERVER_ERROR).send(e.message);
  }
});

EmprestimosController.post('/', async (req: Request, res: Response) => {
  try {

  }
  catch (e: any) {
    res.status(HttpResponseCodes.INTERNAL_SERVER_ERROR).send(e.message);
  }
});

EmprestimosController.put('/', async (req: Request, res: Response) => {
  try {

  }
  catch (e: any) {
    res.status(HttpResponseCodes.INTERNAL_SERVER_ERROR).send(e.message);
  }
});

EmprestimosController.delete('/:id', async (req: Request, res: Response) => {
  try {

  }
  catch (e: any) {
    res.status(HttpResponseCodes.INTERNAL_SERVER_ERROR).send(e.message);
  }
});