// ==============================
// GEOLOCATION
// ==============================

const btnLocalizacao = document.querySelector("#btnLocalizacao");

const latitude = document.querySelector("#latitude");
const longitude = document.querySelector("#longitude");
const precisao = document.querySelector("#precisao");

const mensagemLocalizacao =
    document.querySelector("#mensagemLocalizacao");


btnLocalizacao.addEventListener("click", () => {

    // Verifica se o navegador suporta Geolocation
    if (!navigator.geolocation) {

        mensagemLocalizacao.textContent =
            "Seu navegador não suporta Geolocation.";

        return;
    }

    mensagemLocalizacao.textContent =
        "Solicitando acesso à localização...";

    navigator.geolocation.getCurrentPosition(

        // Quando conseguir a localização
        (posicao) => {

            const latitudeUsuario =
                posicao.coords.latitude;

            const longitudeUsuario =
                posicao.coords.longitude;

            const precisaoUsuario =
                posicao.coords.accuracy;


            latitude.textContent =
                latitudeUsuario.toFixed(6);

            longitude.textContent =
                longitudeUsuario.toFixed(6);

            precisao.textContent =
                precisaoUsuario.toFixed(2) + " metros";


            mensagemLocalizacao.textContent =
                "Localização obtida com sucesso!";
        },

        // Caso aconteça algum erro
        (erro) => {

            switch (erro.code) {

                case erro.PERMISSION_DENIED:
                    mensagemLocalizacao.textContent =
                        "Permissão de localização negada.";
                    break;

                case erro.POSITION_UNAVAILABLE:
                    mensagemLocalizacao.textContent =
                        "Localização indisponível.";
                    break;

                case erro.TIMEOUT:
                    mensagemLocalizacao.textContent =
                        "Tempo para obter localização esgotado.";
                    break;

                default:
                    mensagemLocalizacao.textContent =
                        "Erro ao obter localização.";
            }
        },

        {
            enableHighAccuracy: true,
            timeout: 10000,
            maximumAge: 0
        }
    );
});


// ==============================
// CÂMERA
// ==============================

const btnCamera =
    document.querySelector("#btnCamera");

const btnParar =
    document.querySelector("#btnParar");

const camera =
    document.querySelector("#camera");

const mensagemCamera =
    document.querySelector("#mensagemCamera");


// Guarda o acesso à câmera
let streamCamera = null;


// INICIAR CÂMERA

btnCamera.addEventListener("click", async () => {

    try {

        // Solicita permissão para acessar a câmera
        streamCamera =
            await navigator.mediaDevices.getUserMedia({
                video: true,
                audio: false
            });

        // Coloca a câmera dentro do vídeo
        camera.srcObject = streamCamera;

        mensagemCamera.textContent =
            "Câmera ativada com sucesso!";

    } catch (erro) {

        console.error(erro);

        mensagemCamera.textContent =
            "Não foi possível acessar a câmera. Verifique a permissão.";
    }
});


// PARAR CÂMERA

btnParar.addEventListener("click", () => {

    if (streamCamera) {

        // Encerra todos os recursos da câmera
        streamCamera.getTracks().forEach(track => {
            track.stop();
        });

        camera.srcObject = null;

        streamCamera = null;

        mensagemCamera.textContent =
            "Câmera desligada.";
    }
});