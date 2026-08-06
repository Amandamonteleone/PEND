//classe
class Produto{

//atributos classe
    constructor(nome, preço, estoque) {
        this.nome = nome;
        this.preço = preço;
        this.estoque = estoque;
    }
//metodo
vender(){
    console.log(`Vendendo ${this.nome}!`);
    }
//
repor(){
    console.log(`Repor ${this.nome}!`);
    }
//
alterarPreço(){
    console.log(`Alterando o preço do ${this.nome}!`);
    }
}

//objetos
const produto1 = new Produto("Arroz", 26.00, 10);
//
const produto2 = new Produto("Feijão", 12.50, 5);
//
const produto3 = new Produto("Milho", 8.90, 8);

//metodo
    produto1.vender();
    produto1.repor();
    produto1.alterarPreço();
//metodo
    produto2.vender();
    produto2.repor();
    produto2.alterarPreço();
//metodo
    produto3.vender();
    produto3.repor();
    produto3.alterarPreço();

console.log("------------------------------");
console.log("Atributos do Produto 1:");
console.log("- ", produto1.nome);
console.log("- ", produto1.preço);
console.log("- ", produto1.estoque);
console.log("------------------------------");

console.log("Atributos do Produto 2:");
console.log("- ", produto2.nome);
console.log("- ", produto2.preço);
console.log("- ", produto2.estoque);
console.log("------------------------------");

console.log("Atributos do Produto 3:");
console.log("- ", produto3.nome);
console.log("- ", produto3.preço);
console.log("- ", produto3.estoque);
console.log("------------------------------");

produto1.vender();
produto1.repor();
produto2.vender();
produto2.repor();
produto3.vender();
produto3.repor();
produto3.alterarPreço();