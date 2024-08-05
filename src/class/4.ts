/* 4. Crie uma classe para representar uma Calculadora. Esta classe
deve conter um atributo que servirá para armazenar o histórico das
operações e seus respectivos resultados.
a. Esta classe deve conter as operações de somar, multiplicar,
dividir e diminuir.
b. Esta classe deve iniciar com o histórico vazio
c. Esta classe deve conter uma ação para visualizar o histórico. */

export class Calculadora {
    valorInicial: number;
    historico: { operacao: string, resultado: number }[];

    // Constructor
    constructor(valorInicial: number = 0, historico: { operacao: string, resultado: number }[] = []) {
        this.valorInicial = valorInicial;
        this.historico = historico;
    }

    // Métodos
    soma(a: number, b: number): number {
        const resultado = a + b;
        this.historico.push({ operacao: `Soma: ${a} + ${b}`, resultado: resultado });
            console.log(`A soma dos números é: ${resultado}`);
        return resultado;
    }

    multiplicar(a: number, b: number): number {
        const resultado = a * b;
        this.historico.push({ operacao: `Multiplicação: ${a} * ${b}`, resultado: resultado });
            console.log(`A multiplicação dos números é: ${resultado}`);
        return resultado;
    }

    dividir(a: number, b: number): number {
        const resultado = a / b;
        this.historico.push({ operacao: `Divisão: ${a} / ${b}`, resultado: resultado });
            console.log(`A divisão dos números é: ${resultado}`);
        return resultado;    
    }

    diminuir(a: number, b:number): number {
        const resultado = a - b;
        this.historico.push({operacao: `Subtração: ${a} - ${b}`, resultado: resultado});
            console.log((`A subtração dos números é: ${resultado}`));
        return resultado;
    }
 
    mostrarHistorico(): void {
        console.log("Histórico de operações:");
        this.historico.forEach(calculo => {
            console.log(`${calculo.operacao} = ${calculo.resultado}`);
        });
    }
}