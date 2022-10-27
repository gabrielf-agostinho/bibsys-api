import { Livros } from "../models/Livros";
import { DATABASE_CONTEXT } from "./databaseContext.service";

export class LivrosService {
  constructor() { }

  public parseLivro(Livro: Livros) {
    return new Livros(Livro.nome, Livro.autor, Livro.editora, Livro.genero, Livro.estoque);
  }

  public async getAll(): Promise<Array<Livros> | null> {
    const query: string = `SELECT id, nome FROM livros`;

    const result = await DATABASE_CONTEXT.query(query, []);

    if (result.rowCount > 0) {
      let livros: Array<Livros> = [];

      for (const livro of result.rows) {
        livros.push(livro);  
      }

      return livros;
    }
    else {
      return null;
    }
  }

  public async get(id: number): Promise<Livros | null> {
    const query: string = `SELECT * FROM livros WHERE id = $1`;
    const params: Array<any> = [id];

    const result = await DATABASE_CONTEXT.query(query, params);

    if (result.rowCount > 0) {
      const livro = result.rows[0] as Livros
      return new Livros(livro.nome, livro.autor, livro.editora, livro.genero, livro.estoque, livro.id);
    }
    else {
      return null;
    }
  }
  
  public async post(livro: Livros): Promise<number> {
    const query: string = 'INSERT INTO livros(nome, autor, editora, genero, estoque) VALUES ($1, $2, $3, $4, $5) RETURNING id';
    const params: Array<any> = [livro.nome, livro.autor, livro.editora, livro.genero, livro.estoque];

    const result = await DATABASE_CONTEXT.query(query, params);

    if (result.rowCount > 0)
      return result.rows[0].id;
    else
      return 0;
  }

  public async put(livro: Livros): Promise<void> {
    const query: string = `UPDATE livros SET nome = $1, autor = $2, editora = $3, genero = $4, estoque = $5 WHERE id = $6`;
    const params: Array<any> = [livro.nome, livro.autor, livro.editora, livro.genero, livro.estoque, livro.id];

    await DATABASE_CONTEXT.query(query, params);
  }

  public async delete(id: number): Promise<void> {
    const query: string = `DELETE FROM livros WHERE id = $1`;
    const params: Array<any> = [id];

    await DATABASE_CONTEXT.query(query, params);
  }
}