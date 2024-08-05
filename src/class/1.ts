/* 1. Crie uma classe Contador, que encapsule um valor usado para
contagem de itens ou eventos. A classe deve oferecer métodos que
devem:
a) Zerar;
b) Incrementar;
c) Retornar o valor do contador. */

//Class
export class Contador {
    valor: number;

    // Constructor
    constructor(valorInicial: number = 5) {
        this.valor = valorInicial;
    }

    // Métodos
    zerar(): number {
        return this.valor = 0;
    }

    incrementar(): void {
        this.valor += 1;
    }

    obterValor(): number {
        return this.valor;
    }
}