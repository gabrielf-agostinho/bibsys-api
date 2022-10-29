import { IAlunos } from "./interfaces/IAlunos.interface";

export class Alunos implements IAlunos {
  id?: number | undefined;
  nome: string;
  periodo: string;
  etapa: string;
  ano: number;

  constructor (nome: string, periodo: string, etapa: string, ano: number, id?: number) {
    this.id = id;
    this.nome = nome,
    this.periodo = periodo,
    this.etapa = etapa,
    this.ano = ano
  }
}