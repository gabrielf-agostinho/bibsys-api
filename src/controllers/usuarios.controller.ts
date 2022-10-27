import express, { Request, Response } from "express";
import { HttpResponseCodes } from "../models/enums/HttpResponseCodes";
import { Usuarios } from "../models/Usuarios";

export const UsuariosController = express.Router();

UsuariosController.get('/', async (req: Request, res: Response) => {
  try {

  }
  catch (e: any) {
    res.status(HttpResponseCodes.INTERNAL_SERVER_ERROR).send(e.message);
  }
});

UsuariosController.get('/:id', async (req: Request, res: Response) => {
  try {

  }
  catch (e: any) {
    res.status(HttpResponseCodes.INTERNAL_SERVER_ERROR).send(e.message);
  }
});

UsuariosController.post('/', async (req: Request, res: Response) => {
  try {

  }
  catch (e: any) {
    res.status(HttpResponseCodes.INTERNAL_SERVER_ERROR).send(e.message);
  }
});

UsuariosController.put('/', async (req: Request, res: Response) => {
  try {

  }
  catch (e: any) {
    res.status(HttpResponseCodes.INTERNAL_SERVER_ERROR).send(e.message);
  }
});

UsuariosController.delete('/:id', async (req: Request, res: Response) => {
  try {

  }
  catch (e: any) {
    res.status(HttpResponseCodes.INTERNAL_SERVER_ERROR).send(e.message);
  }
});