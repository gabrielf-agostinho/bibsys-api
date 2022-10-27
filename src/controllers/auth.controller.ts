import express, { Request, Response } from "express";
import { HttpResponseCodes } from "../models/enums/HttpResponseCodes";
import { Auth } from "../models/Auth";
import { AuthService } from "../services/auth.service";

export const AuthController = express.Router();

AuthController.post('/', async (req: Request, res: Response) => {
  try {
    const authService = new AuthService();
    
    const auth: Auth = authService.parseAuth(req.body as Auth);

    const isAuthenticated: boolean = await authService.get(auth);

    if (isAuthenticated)
      res.status(HttpResponseCodes.OK).send();
    else
      res.status(HttpResponseCodes.UNAUTHORIZED).send();
  }
  catch (e: any) {
    res.status(HttpResponseCodes.INTERNAL_SERVER_ERROR).send(e.message);
  }
});