import { Emprestimos } from "../models/Emprestimos";
import { DATABASE_CONTEXT } from "./databaseContext.service";
import { LivrosService } from "../services/livros.service";
import { Livros } from "../models/Livros";

export class EmprestimosService {
  constructor() { }

  public async getAll(): Promise<Array<Emprestimos> | null> {
    const query: string = `SELECT * FROM emprestimos`;

    const result = await DATABASE_CONTEXT.query(query);

    if (result.rowCount > 0) {
      let emprestimos: Array<Emprestimos> = [];

      for (const emprestimo of result.rows) {
        emprestimos.push(emprestimo as Emprestimos);
      }

      return emprestimos;
    }
    else {
      return null;
    }
  }

  public async get(id: number): Promise<Emprestimos | null> {
    const query: string = `SELECT * FROM emprestimos WHERE id = $1`;
    const params: Array<any> = [id];

    const result = await DATABASE_CONTEXT.query(query, params);

    if (result.rowCount > 0)
      return result.rows[0] as Emprestimos
    else
      return null;
  }

  public async post(emprestimo: Emprestimos): Promise<number> {
    const query: string = `INSERT INTO emprestimos (id_livro, id_aluno, data_devolucao) VALUES ($1, $2, $3) RETURNING id`;
    const params: Array<any> = [emprestimo.idLivro, emprestimo.idAluno, emprestimo.dataDevolucao];

    const result = await DATABASE_CONTEXT.query(query, params);

    const livrosService = new LivrosService();

    const livro: Livros | null = await livrosService.get(emprestimo.idLivro);

    if (livro) {
      livro.estoque = livro.estoque--;

      await livrosService.put(livro);
    }

    if (result.rowCount > 0)
      return result.rows[0].id;
    else
      return 0;
  }

  public async put(emprestimo: Emprestimos): Promise<void> {
    const query: string = `UPDATE emprestimos, SET id_livro = $1, id_aluno = $2, data_emprestimo = $3, data_devolucao = $4, devolvido = $5 WHERE id = $6`;
    const params: Array<any> = [emprestimo.idLivro, emprestimo.idAluno, emprestimo.dataEmprestimo, emprestimo.dataDevolucao, emprestimo.devolvido, emprestimo.id];

    if (emprestimo.devolvido) {
      const livrosService = new LivrosService();

      const livro: Livros | null = await livrosService.get(emprestimo.idLivro);

      if (livro) {
        livro.estoque = livro.estoque++;

        await livrosService.put(livro);
      }
    }

    await DATABASE_CONTEXT.query(query, params);
  }

  public async delete(id: number): Promise<void> {
    const query: string = `DELETE FROM emprestimos WHERE id = $1`;
    const params: Array<any> = [id];

    await DATABASE_CONTEXT.query(query, params);
  }
}