// Funtion para botão da pág. Html
function run() {

    let dadosUsuario = []; // array vazio

    do { // executar até que condição seja atendida

        // push do nome no array
        dadosUsuario.push(nomePrompt = window.prompt("Digite o seu nome:"));

        console.log(dadosUsuario);

        // push da idade no array
        dadosUsuario.push(idadePrompt = Number(window.prompt("Digite a sua idade:")));

        console.log(dadosUsuario);

        // push da altura no array
        dadosUsuario.push(alturaPrompt = Number(window.prompt("Digite a sua altura:")));

        console.log(dadosUsuario);

        // push do peso no array
        dadosUsuario.push(pesoPrompt = Number(window.prompt("Digite o seu peso:")));

        console.log(dadosUsuario);

    } while (nomePrompt.toLowerCase() != "sair") // Condição para finalizar repetição

    console.log("Fim de cadastro!");

    alert("FINALIZOU CADASTRO!")
    
    


}

