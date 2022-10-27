import { ILivros } from "./interfaces/ILivros.interface";

export class Livros implements ILivros {
  id?: number | undefined;
  nome: string;
  autor: string;
  editora: string;
  genero: string;
  estoque: number;
  
  constructor(nome: string, autor: string, editora: string, genero: string, estoque: number, id?: number) {
    this.id = id,
    this.nome = nome,
    this.autor = autor,
    this.editora = editora,
    this.genero = genero,
    this.estoque = estoque
  }
}