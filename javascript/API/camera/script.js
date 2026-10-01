const video = document.querySelector('#camera');
const canvas = document.querySelector('#canvas');
const botao = document.querySelector('#botao');
const foto = document.querySelector('#foto');
const btnLocalizacao = document.querySelector("#btnLocalizacao");
const resultadoLocalizacao = document.querySelector("#resultadoLocalizacao");


navigator.mediaDevices.getUserMedia({
     video: true
})
.then(function(stream) {
    const video = document.querySelector('#camera');
    video.srcObject = stream;
})
.catch(function(erro) {
    console.log("Erro ao acessar a câmera:", erro);
});

botao.addEventListener('click', function() {
    canvas.width = video.clientWidth;
    canvas.height = video.clientHeight;

    const contexto = canvas.getContext('2d');
    contexto.drawImage(
        video,
         0,
          0,
           canvas.width, 
           canvas.height);
    foto.src = canvas.toDataURL('image/png');
});

btnLocalizacao.addEventListener("click", function () {
    if (!navigator.geolocation) {
        resultadoLocalizacao.innerHTML = "Seu navegador não possui suporte à geolocalização.";
        return;
    }

    resultadoLocalizacao.innerHTML = "Buscando localização...";

    navigator.geolocation.getCurrentPosition(
        function (posicao) {
            const latitude = posicao.coords.latitude;
            const longitude = posicao.coords.longitude;
            const precisao = posicao.coords.accuracy;

            resultadoLocalizacao.innerHTML = `
                <strong>Latitude:</strong> ${latitude.toFixed(6)}<br>
                <strong>Longitude:</strong> ${longitude.toFixed(6)}<br>
                <strong>Precisão:</strong> ${precisao.toFixed(0)} metros
            `;
        },
        function () {
            resultadoLocalizacao.innerHTML = "Não foi possível obter sua localização. Verifique a permissão do navegador.";
        }
    );
});