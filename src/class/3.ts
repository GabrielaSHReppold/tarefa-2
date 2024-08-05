/* 3. Crie uma classe para implementar uma conta corrente. A classe
deve possuir os seguintes atributos:
a. Número da conta
b. Nome do correntista
c. Saldo
Os métodos são os seguintes:
a) Alterar nome
b) Deposito
c) Saque
No construtor, o saldo é opcional, com valor padrão zero e os
demais atributos são obrigatórios. A conta não pode ficar com saldo
negativo. */


export interface ContaCorrente {
    numeroConta: number;
    nomeCorrentista: string;
    saldo?: number;
  }

  export class ContaCorrenteClass implements ContaCorrente {
    numeroConta: number;
    nomeCorrentista: string;
    saldo: number;
  
    // Construtor
    constructor(numeroConta: number, nomeCorrentista: string, saldo: number = 0) {
      this.numeroConta = numeroConta;
      this.nomeCorrentista = nomeCorrentista;
      this.saldo = saldo;
    }
  
    // Métodos
    alterarNome(novoNome: string): void {
      this.nomeCorrentista = novoNome;
    }
  
    deposito(valor: number): void {
      if (valor > 0) {
        this.saldo += valor;
        console.log(`Depósito de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
      } else {
        console.log("Valor de depósito inválido.");
      }
    }
  
    saque(valor: number): void {
      if (valor > 0 && this.saldo >= valor) {
        this.saldo -= valor;
        console.log(`Saque de R$${valor} realizado. Saldo atual: R$${this.saldo}`);
      } else if (valor > this.saldo) {
        console.log("Saldo insuficiente para realizar o saque.");
      } else {
        console.log("Valor de saque inválido.");
      }
    }
  }
