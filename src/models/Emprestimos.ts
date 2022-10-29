import { IEmprestimos } from "./interfaces/IEmprestimos.interface";

export class Emprestimos implements IEmprestimos {
  id?: number | undefined;
  idLivro: number;
  idAluno: number;
  dataEmprestimo: Date;
  dataDevolucao: Date;
  devolvido: boolean;

  constructor(idLivro: number, idAluno: number, dataEmprestimo: Date, dataDevolucao: Date, devolvido: boolean = false, id?: number) {
    this.id = id;
    this.idLivro = idLivro;
    this.idAluno = idAluno;
    this.dataEmprestimo = dataEmprestimo;
    this.dataDevolucao = dataDevolucao;
    this.devolvido = devolvido;
  }
}