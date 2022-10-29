export interface IEmprestimos {
  id?: number
  idLivro: number;
  idAluno: number;
  dataEmprestimo: Date;
  dataDevolucao: Date;
  devolvido: boolean;
}