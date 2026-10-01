const comidas = document.querySelectorAll(".comida");

const gatinho = document.querySelector("#gatinho");

const imagemGato = document.querySelector("#imagemGato");

const mensagem = document.querySelector("#mensagem");

const finalizar = document.querySelector("#finalizar");

let comidaArrastada = null;

let quantidadeComidas = 0;


comidas.forEach(comida => {

    comida.addEventListener("dragstart", () => {

        comidaArrastada = comida;

        comida.classList.add("arrastando");

    });


    comida.addEventListener("dragend", () => {

        comida.classList.remove("arrastando");

    });

});


gatinho.addEventListener("dragover", (event) => {

    event.preventDefault();

});


gatinho.addEventListener("drop", () => {

    if (!comidaArrastada) {
        return;
    }


    if (
        comidaArrastada.id === "chocolate" ||
        comidaArrastada.id === "batata"
    ) {

        mensagem.textContent = "O gatinho não pode comer isso! 😭🐱";

        imagemGato.src = "img/catchoro.png";

    } else {

        quantidadeComidas++;

        mensagem.textContent = "O gatinho adorou! 😋🐱";

        comidaArrastada.style.display = "none";


        if (quantidadeComidas >= 2) {

            imagemGato.src = "img/CATFELIZ.png";

            mensagem.textContent = "O gatinho está satisfeito! ❤️🐱";

        } else {

            imagemGato.src = "img/CATFELIZ.png";

        }

    }


    comidaArrastada = null;

});


finalizar.addEventListener("click", () => {

    if (quantidadeComidas >= 2) {

        imagemGato.src = "img/CATFELIZ.png";

        mensagem.textContent = "Parabéns! Você alimentou o gatinho! 🎉🐱❤️";

    } else {

        mensagem.textContent = "Dê mais comida para o gatinho antes de finalizar! 🐱";

    }

});