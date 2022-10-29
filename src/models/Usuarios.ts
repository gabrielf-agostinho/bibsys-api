import { IUsuarios } from "./interfaces/IUsuarios.interface";

export class Usuarios implements IUsuarios {
  id: number | undefined;
  login: string;
  senha: string;
  
  constructor (login: string, senha: string, id?: number) {
    this.id = id;
    this.login = login;
    this.senha = senha;
  }
}