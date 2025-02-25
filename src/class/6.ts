/* 6. Implemente uma classe chamada Carro com as seguintes
propriedades:
a. Um veículo tem um certo consumo de combustível (medidos
em km / litro) e uma certa quantidade de combustível no
tanque.
b. O consumo é especificado no construtor e o nível de
combustível inicial é 0.
c. Forneça um método andar() que simula o ato de dirigir o
veículo por uma certa distância, reduzindo o nível de
combustível no tanque de gasolina.

d. Forneça um método obterGasolina(), que retorna o nível atual
de combustível e forneça um método adicionarGasolina(),
para abastecer o tanque.
Exemplo:
meuFusca = new Carro(15)
meuFusca.adicionarGasolina(20)
meuFusca.andar(100)
meuFusca.obterGasolina() */

export class Carro {
    consumo: number;
    nivelCombustivel: number;
  
    constructor(consumo: number) {
      this.consumo = consumo;
      this.nivelCombustivel = 0; 
    }
  
    andar(distancia: number): void {
      const combustivelNecessario = distancia / this.consumo;
      if (combustivelNecessario <= this.nivelCombustivel) {
        this.nivelCombustivel -= combustivelNecessario;
        console.log(`Você dirigiu ${distancia} km. Combustível restante: ${this.nivelCombustivel.toFixed(2)} litros.`);
      } else {
        console.log("Combustível insuficiente para percorrer essa distância.");
      }
    }
  
    obterGasolina(): number {
      return this.nivelCombustivel;
    }
  
    adicionarGasolina(quantidade: number): void {
      this.nivelCombustivel += quantidade;
      console.log(`Adicionados ${quantidade} litros de combustível. Nível atual: ${this.nivelCombustivel.toFixed(2)} litros.`);
    }
}