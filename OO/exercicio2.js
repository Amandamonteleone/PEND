//classe
class Aluno{

//atributos classe
    constructor(nome, idade, curso, matricula) {
        this.nome = nome;
        this.idade = idade;
        this.curso = curso;
        this.matricula = matricula;
    }
//metodo
aprender(){
    console.log(`O aluna(o) ${this.nome} está aprendendo!`);
    }
//
estudar(){
    console.log(`O aluna(o) ${this.nome} está estudando!`);
    }
//
apresentar(){
    console.log(`O aluna(o) ${this.nome} está apresentando!`);
    }
}

//objetos
const aluno1 = new Aluno("Gabi", 20, "Engenharia", "12345");
//
const aluno2 = new Aluno("Mariana", 22, "Biomedicina", "67890");
//
const aluno3 = new Aluno("Amanda", 19, "Nutrição", "54321");

//metodo
    aluno1.aprender();
    aluno1.estudar();
    aluno1.apresentar();
//metodo
    aluno2.aprender();
    aluno2.estudar();
    aluno2.apresentar();
//metodo
    aluno3.aprender();
    aluno3.estudar();
    aluno3.apresentar();

console.log("------------------------------");
console.log("Atributos do Aluno 1:");
console.log("- ", aluno1.nome);
console.log("- ", aluno1.idade);
console.log("- ", aluno1.curso);
console.log("- ", aluno1.matricula);
console.log("------------------------------");

console.log("Atributos do Aluno 2:");
console.log("- ", aluno2.nome);
console.log("- ", aluno2.idade);
console.log("- ", aluno2.curso);
console.log("- ", aluno2.matricula);
console.log("------------------------------");

console.log("Atributos do Aluno 3:");
console.log("- ", aluno3.nome);
console.log("- ", aluno3.idade);
console.log("- ", aluno3.curso);
console.log("- ", aluno3.matricula);
console.log("------------------------------");

aluno1.aprender();
aluno1.estudar();
aluno2.aprender();
aluno2.estudar();
aluno3.aprender();
aluno3.estudar();
aluno3.apresentar();