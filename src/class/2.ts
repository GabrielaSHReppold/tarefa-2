/* 2. Crie uma classe que modele uma bola:
a. Atributos
i. Cor
ii. Circunferência
iii. Material
b. Métodos
i. Trocar Cor
ii. Mostrar cor */
export type Material = "couro" | "couroSintetico" | "borracha"
//Class
export class Bola {
    cor: string;
    circunferencia: number;
    material: Material;

    //Constructor
    constructor(cor: string, circunferencia: number, material: Material) {
        this.cor = cor;
        this.circunferencia = circunferencia;
        this.material = material;
    }

    //Métodos
    corInicial(corInicial:string):void {
            console.log(`A cor inicial da bola é: ${"azul"}`)
    }
    

    trocarCor(novaCor: string): void {
        this.cor = novaCor;
        console.log(`A cor da bola foi alterada para: ${this.cor}`);
    }

    mosrtarCor(): void{
        console.log(`A cor atual da bola é: ${this.cor}`);
    }
}



