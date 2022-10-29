import { Alunos } from "../models/Alunos";
import { DATABASE_CONTEXT } from "./databaseContext.service";

export class AlunosService {
  constructor() { }

  public async getAll(): Promise<Array<Alunos> | null> {
    const query: string = `SELECT * FROM alunos`;

    const result = await DATABASE_CONTEXT.query(query);

    if (result.rowCount > 0) {
      let alunos: Array<Alunos> = [];

      for (const aluno of result.rows) {
        alunos.push(aluno as Alunos);
      }

      return alunos;
    }
    else {
      return null;
    }
  }

  public async get(id: number): Promise<Alunos | null> {
    const query: string = `SELECT * FROM alunos WHERE id = $1`;
    const params: Array<any> = [id];

    const result = await DATABASE_CONTEXT.query(query, params);

    if (result.rowCount > 0)
      return result.rows[0] as Alunos;
    else
      return null;
  }

  public async post(aluno: Alunos): Promise<number> {
    const query: string = `INSERT INTO alunos(nome, periodo, etapa, ano) VALUES ($1, $2, $3, $4) RETURNING id`;
    const params: Array<any> = [aluno.nome, aluno.periodo, aluno.etapa, aluno.ano];

    const result = await DATABASE_CONTEXT.query(query, params);

    if (result.rowCount > 0)
      return result.rows[0].id;
    else
      return 0;
  }

  public async put(aluno: Alunos): Promise<void> {
    const query: string = `UPDATE alunos SET nome = $1, periodo = $2, etapa = $3, ano = $4 WHERE id = $5`;
    const params: Array<any> = [aluno.nome, aluno.periodo, aluno.etapa, aluno.ano, aluno.id];

    await DATABASE_CONTEXT.query(query, params);
  }

  public async delete(id: number): Promise<void> {
    const query: string = `DELETE FROM alunos WHERE id = $1`;
    const params: Array<any> = [id];

    await DATABASE_CONTEXT.query(query, params);
  }
}