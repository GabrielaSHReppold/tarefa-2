import { Bola } from './class/2';
import { Material } from './class/2';
import { Contador } from './class/1';
import { ContaCorrente } from './interface';
import { ContaCorrenteClass } from './class/3';
import { Calculadora } from './class/4';
import { BombaCombustivel } from './class/5';
import { Carro } from './class/6';

console.log("---------------- Atividade 1 -------------------");
console.log("");

const contador = new Contador();

contador.obterValor
console.log(`O valor é: ${contador.obterValor()}`);
console.log("");

contador.incrementar();
console.log(`Valor do contador incrementado é: ${contador.obterValor()}`);
console.log("");

contador.zerar
console.log(`Valor do contador após zerar: ${contador.zerar()}`);
console.log("");

console.log("---------------- Atividade 2 -------------------");
console.log("");

const novaBola = new Bola("azul", 69, "couroSintetico");

novaBola.corInicial("azul");
console.log("");

novaBola.trocarCor("verde");
console.log("");

novaBola.mosrtarCor();
console.log("");

console.log("---------------- Atividade 3 -------------------");

const minhaConta = new ContaCorrenteClass(12345 , "João Silva");
console.log("")

minhaConta.deposito(1000);
minhaConta.saque(500);
minhaConta.alterarNome("João Pedro Silva");
console.log(minhaConta);

console.log("---------------- Atividade 4 -------------------");

const meuCalculo = new Calculadora();

meuCalculo.soma(1, 2);
meuCalculo.multiplicar(12, 4);
meuCalculo.dividir(8,2);
meuCalculo.diminuir(15, 10);
console.log("");
meuCalculo.mostrarHistorico();
console.log("");

console.log("---------------- Atividade 5 -------------------");
console.log("");

const minhaBomba = new BombaCombustivel("Gasolina", 5.79, 1000);

minhaBomba.abastecerPorValor(200.00);
minhaBomba.abastecerPorLitro(10);
minhaBomba.alterarValor(6.50);
minhaBomba.alterarCombustivel("Diesel");
minhaBomba.alterarQuantidadeCombustivel(400);
minhaBomba.abastecerPorValor(3000); 
console.log(minhaBomba);

console.log("---------------- Atividade 6 -------------------");
console.log("");

const meuCarro = new Carro(15); 
meuCarro.adicionarGasolina(20);
meuCarro.andar(100);
console.log(`Nível de combustível restante: ${meuCarro.obterGasolina().toFixed(2)} litros.`);