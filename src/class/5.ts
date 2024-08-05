/* Faça um programa completo utilizando classes e métodos que:
a. Possua uma classe chamada BombaCombustivel, com no
mínimo esses atributos:
i. tipoCombustivel.
ii. valorLitro

iii. quantidadeCombustivel
b. Possua no mínimo esses métodos:


i. abastecerPorValor() – método onde é informado o
valor a ser abastecido e mostra a quantidade de litros
que foi colocada no veículo

ii. abastecerPorLitro() – método onde é informado a
quantidade em litros de combustível e mostra o valor a
ser pago pelo cliente.
iii. alterarValor() – altera o valor do litro do combustível.
iv. alterarCombustivel() – altera o tipo do combustível.
v. alterarQuantidadeCombustivel() – altera a
quantidade de combustível restante na bomba.

OBS: Sempre que acontecer um abastecimento é necessário
atualizar a quantidade de combustível total na bomba. Não deve ser
possível abastecer se não tiver gasolina suficiente na bomba.*/
export class BombaCombustivel {
    tipoCombustivel: string;
    valorLitro: number;
    quantidadeCombustivel: number;

    constructor(tipoCombustivel: string, valorLitro: number, quantidadeCombustivel:number) {
        this.tipoCombustivel = tipoCombustivel;
        this.valorLitro = valorLitro;
        this.quantidadeCombustivel = quantidadeCombustivel;
    }

    abastecerPorValor(valor: number): void {
        const litros = valor / this.valorLitro;
        if (litros <= this.quantidadeCombustivel) {
          this.quantidadeCombustivel -= litros;
          console.log(`Abastecido ${litros.toFixed(2)} litros. Combustível restante na bomba: ${this.quantidadeCombustivel.toFixed(2)} litros.`);
        } else {
          console.log("Não há combustível suficiente na bomba para este abastecimento.");
        }
      }
    
      abastecerPorLitro(litros: number): void {
        const valor = litros * this.valorLitro;
        if (litros <= this.quantidadeCombustivel) {
          this.quantidadeCombustivel -= litros;
          console.log(`Valor a ser pago: R$${valor.toFixed(2)}. Combustível restante na bomba: ${this.quantidadeCombustivel.toFixed(2)} litros.`);
        } else {
          console.log("Não há combustível suficiente na bomba para este abastecimento.");
        }
      }
    
      alterarValor(novoValor: number): void {
        this.valorLitro = novoValor;
        console.log(`Valor do litro alterado para R$${novoValor.toFixed(2)}.`);
      }
    
      alterarCombustivel(novoCombustivel: string): void {
        this.tipoCombustivel = novoCombustivel;
        console.log(`Tipo de combustível alterado para ${novoCombustivel}.`);
      }
    
      alterarQuantidadeCombustivel(novaQuantidade: number): void {
        this.quantidadeCombustivel = novaQuantidade;
        console.log(`Quantidade de combustível na bomba alterada para ${novaQuantidade.toFixed(2)} litros.`);
      }
}
    

    





