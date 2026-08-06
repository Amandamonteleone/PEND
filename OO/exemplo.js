//classe
class Carro{

//atributos classe
    constructor(marca, modelo, ano, cor) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.cor = cor;
    }
//metodo
ligar(){
    console.log("Carro ligado!");
    }
//
acelerar(){
    console.log("Acelerando!");
    }
//
frear(){
    console.log(`O carro ${this.modelo} freiou!`);
    }
}

//objetos
const carro1 = new Carro("Volkswagen", "Gol", 2022, "Branco");
//
const carro2 = new Carro("Toyota", "Corolla", 2025, "Preto");
//
const carro3 = new Carro("Dodge", "Challenger", 2019, "Azul");

//metodo
    carro1.ligar();
    carro1.acelerar();
    carro1.frear();
//metodo
    carro2.ligar();
    carro2.acelerar();
    carro2.frear();
//metodo
    carro3.ligar();
    carro3.acelerar();
    carro3.frear();

console.log("------------------------------");
console.log("Atributos do Carro 1:");
console.log("- ", carro1.marca);
console.log("- ", carro1.modelo);
console.log("- ", carro1.ano);
console.log("- ", carro1.cor);
console.log("------------------------------");

console.log("Atributos do Carro 2:");
console.log("- ", carro2.marca);
console.log("- ", carro2.modelo);
console.log("- ", carro2.ano);
console.log("- ", carro2.cor);
console.log("------------------------------");

console.log("Atributos do Carro 3:");
console.log("- ", carro3.marca);
console.log("- ", carro3.modelo);
console.log("- ", carro3.ano);
console.log("- ", carro3.cor);
console.log("------------------------------");

carro1.ligar();
carro2.acelerar();
carro3.frear();
carro1.acelerar();