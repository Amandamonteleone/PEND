const noticias = document.getElementById("noticias");

const artistasRock = [
    "Metallica",
    "Iron Maiden",
    "Guns N' Roses",
    "AC/DC",
    "Black Sabbath",
    "Slipknot",
    "Linkin Park",
    "Foo Fighters",
    "Korn"
];

async function buscarNoticias() {
    noticias.innerHTML = `
        <p class="carregando">
            Carregando novidades do rock...
        </p>
    `;

    try {
        const resultados = [];

        for (const artista of artistasRock) {

            const busca = `artist:"${artista}"`;

            const url =
                "https://musicbrainz.org/ws/2/release-group/" +
                "?query=" + encodeURIComponent(busca) +
                "&fmt=json" +
                "&limit=2";

            const resposta = await fetch(url, {
                method: "GET",
                headers: {
                    "Accept": "application/json"
                }
            });

            if (!resposta.ok) {
                throw new Error(
                    "Erro ao consultar a API: " + resposta.status
                );
            }

            const dados = await resposta.json();

            if (dados["release-groups"]) {

                dados["release-groups"].forEach(release => {

                    resultados.push({
                        titulo: release.title,
                        data: release["first-release-date"],
                        tipo: release["primary-type"],
                        artista: artista,
                        id: release.id
                    });

                });
            }
        }

        const resultadosValidos = resultados.filter(
            item => item.data
        );

        resultadosValidos.sort((a, b) => {
            return new Date(b.data) - new Date(a.data);
        });

        mostrarNoticias(
            resultadosValidos.slice(0, 9)
        );

    } catch (erro) {

        console.error("ERRO:", erro);

        noticias.innerHTML = `
            <div class="erro">
                <h2>Erro ao carregar novidades</h2>

                <p>
                    Não foi possível consultar a MusicBrainz.
                </p>

                <p>
                    Verifique sua conexão com a internet e tente novamente.
                </p>
            </div>
        `;
    }
}


function mostrarNoticias(lista) {

    noticias.innerHTML = "";

    if (lista.length === 0) {

        noticias.innerHTML = `
            <div class="erro">
                <h2>Nenhum lançamento encontrado</h2>

                <p>
                    Não encontramos lançamentos para exibir.
                </p>
            </div>
        `;

        return;
    }


    lista.forEach(item => {

        const card = document.createElement("div");

        card.className = "noticia";


        const imagem =
            "https://coverartarchive.org/release-group/" +
            item.id +
            "/front-250";


        card.innerHTML = `
            <img
                src="${imagem}"
                alt="${item.titulo}"
                onerror="this.src='imagem/logo.png'"
            >

            <h2>
                ${item.titulo}
            </h2>

            <p>
                <strong>Artista:</strong>
                ${item.artista}
            </p>

            <p>
                <strong>Data:</strong>
                ${formatarData(item.data)}
            </p>

            <p>
                <strong>Tipo:</strong>
                ${item.tipo || "Não informado"}
            </p>

            <a
                href="https://musicbrainz.org/release-group/${item.id}"
                target="_blank"
                rel="noopener noreferrer"
                class="btn"
            >
                Ver detalhes
            </a>
        `;

        noticias.appendChild(card);
    });
}


function formatarData(data) {

    if (!data) {
        return "Não informada";
    }

    const partes = data.split("-");

    const ano = partes[0];
    const mes = partes[1];
    const dia = partes[2];


    if (!mes) {
        return ano;
    }


    const meses = [
        "Janeiro",
        "Fevereiro",
        "Março",
        "Abril",
        "Maio",
        "Junho",
        "Julho",
        "Agosto",
        "Setembro",
        "Outubro",
        "Novembro",
        "Dezembro"
    ];


    if (!dia) {
        return `${meses[Number(mes) - 1]} de ${ano}`;
    }


    return `${dia} de ${meses[Number(mes) - 1]} de ${ano}`;
}


// MENU

const menuLinks = document.querySelectorAll(".menu a");

menuLinks.forEach(link => {

    link.addEventListener("click", function(event) {

        event.preventDefault();

        console.log(
            "Categoria selecionada:",
            this.textContent
        );

    });

});


// INICIAR

buscarNoticias();