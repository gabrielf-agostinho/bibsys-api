import { IAuth } from "./interfaces/IAuth.interface";

export class Auth implements IAuth {
  login: string;
  senha: string;
  
  constructor(login: string, senha: string) {
    this.login = login;
    this.senha = senha;
  }
}