const formulario = document.getElementById("formulario");

formulario.addEventListener("submit", function(event){

    event.preventDefault();

    let nome = document.getElementById("nome").value.trim();
    let email = document.getElementById("email").value.trim();

    if(nome === "" || email === ""){
        alert("Preencha todos os campos.");
        return;
    }

    if(!email.includes("@") || !email.includes(".")){
        alert("Digite um e-mail válido.");
        return;
    }

    document.getElementById("mensagem").innerHTML =
    "Obrigado pelo contato, " + nome + "! Em breve retornarei para o e-mail " + email + ".";

    formulario.reset();

});