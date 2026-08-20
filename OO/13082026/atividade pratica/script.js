class Produto {

    constructor(nome, preco, categoria, desconto) {
        this.nome = nome;
        this.preco = preco;
        this.categoria = categoria;
        this.desconto = desconto;
    }

    aplicarDesconto() {
        const novoPreco = this.preco - (this.preco * this.desconto / 100);
        return novoPreco;
    }
}


class Produtos {

    constructor() {
        const produtosSalvos = JSON.parse(localStorage.getItem("produtos")) || [];
        const excluidosSalvos = JSON.parse(localStorage.getItem("produtosExcluidos")) || [];

        this.produtos = produtosSalvos.map(produto =>
            new Produto(
                produto.nome,
                produto.preco,
                produto.categoria,
                produto.desconto
            )
        );

        this.produtosExcluidos = excluidosSalvos.map(produto =>
            new Produto(
                produto.nome,
                produto.preco,
                produto.categoria,
                produto.desconto
            )
        );
    }

    adicionarProduto(produto) {
        this.produtos.push(produto);

        localStorage.setItem("produtos", JSON.stringify(this.produtos));

        this.exibir();
    }

    excluirProduto(indice) {
        const produtoExcluido = this.produtos.splice(indice, 1)[0];

        this.produtosExcluidos.push(produtoExcluido);

        localStorage.setItem("produtos", JSON.stringify(this.produtos));
        localStorage.setItem("produtosExcluidos", JSON.stringify(this.produtosExcluidos));

        this.exibir();
    }

    recuperarProduto() {

        if (this.produtosExcluidos.length > 0) {

            const produto = this.produtosExcluidos.pop();

            this.produtos.push(produto);

            localStorage.setItem("produtos", JSON.stringify(this.produtos));
            localStorage.setItem("produtosExcluidos", JSON.stringify(this.produtosExcluidos));

            this.exibir();
        }
    }

    exibir() {
        const resultado = document.querySelector("#resultado");

        resultado.innerHTML = "";

        this.produtos.forEach((produto, indice) => {

            resultado.innerHTML += `
                <div>
                    <p>Nome: ${produto.nome}</p>
                    <p>Preço: ${produto.aplicarDesconto()}</p>
                    <p>Categoria: ${produto.categoria}</p>
                    <p>Desconto: ${produto.desconto}%</p>

                    <button onclick="produtos.excluirProduto(${indice})">
                        Excluir
                    </button>
                </div>
                <br>
            `;
        });
    }
}


const produtos = new Produtos();

const nome = document.querySelector("#nome");
const preco = document.querySelector("#preco");
const categoria = document.querySelector("#categoria");
const desconto = document.querySelector("#desconto");

const botaoCadastrar = document.querySelector("#botaoCadastrar");
const botaoRecuperar = document.querySelector("#botaoRecuperar");


botaoCadastrar.addEventListener("click", function () {

    const produto = new Produto(
        nome.value,
        Number(preco.value),
        categoria.value,
        Number(desconto.value)
    );

    produtos.adicionarProduto(produto);

});


botaoRecuperar.addEventListener("click", function () {

    produtos.recuperarProduto();

});


produtos.exibir();