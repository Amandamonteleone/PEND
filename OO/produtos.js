//classe
class Produto{

//atributos classe
    constructor(nome,id, marca, preço, dataFabricação, dataValidade, quantidade) {
        this.nome = nome;
        this.marca = marca;
        this.preço = preço;
        this.dataFabricação = dataFabricação;
        this.dataValidade = dataValidade;
        this.quantidade = quantidade;
    }
//metodo
vender(){
    console.log(`Vendendo ${this.nome} da marca ${this.marca}!`);
    }
//
comprar(){
    console.log(`Comprando ${this.nome} da marca ${this.marca}!`);
    }
//
vencido(){
    console.log(`O produto ${this.nome} da marca ${this.marca} está vencido!`);
    }
}

//objetos
const produto1 = new Produto("Arroz", "Panela de ferro", 26.00, "2025-12", "2023-12-31", 10);
//
const produto2 = new Produto("Feijão", "Dona Benta", 12.50, "2023-01-01", "2023-12-31", 5);
//
const produto3 = new Produto("", "Yoki", 8.90, "2023-01-01", "2023-12-31", 8);

//metodo
    produto1.vender();
    produto1.comprar();
    produto1.vencido();
//metodo
    carro2.ligar();
    carro2.acelerar();
    carro2.frear();
//metodo
    carro3.ligar();
    carro3.acelerar();
    carro3.frear();

console.log("------------------------------");
console.log("Atributos do produto 1:");
console.log("- ", produto1.nome);
console.log("- ", produto1.id);
console.log("- ", produto1.marca);
console.log("- ", produto1.preço);
console.log("- ", produto1.dataFabricação);
console.log("- ", produto1.dataValidade);
console.log("- ", produto1.quantidade);
console.log("------------------------------");

console.log("Atributos do produto 2:");
console.log("- ", produto2.marca);
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

