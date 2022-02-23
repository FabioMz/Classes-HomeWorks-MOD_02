//--------------------------- Window Prompt ------------------------------

//Recebendo Nome pelo Window.prompt
nomePrompt = window.prompt("Digite seu nome:")

//Recebendo Sobrenome pelo Window.prompt
snomePrompt = window.prompt("Digite seu sobrenome:")

//Recebendo Idade pelo Window.prompt
idadePrompt = window.prompt("Digite sua idade:")

//Recebendo Gênero pelo Window.prompt
generoPrompt = window.prompt("Digite seu gênero:")

//Recebendo Números pelo Window.prompt
n1 = parseInt(window.prompt("Digite um número"))
n2 = parseInt(window.prompt("Digite outro número"))

//----------------------------- Functions --------------------------------

function cabecalho(){
    console.log("-->" + " " + "Informações de Usuário" + " " + "<--")
    console.log(" ");
}

function nomeCompleto(){
    console.log("Nome Completo: " + nomePrompt + " " + snomePrompt)
}

function idade(){
    console.log("Idade: " + idadePrompt)
}

function genero(){
    console.log("Gênero: " + generoPrompt)
}

function cabecalho2(){
    console.log(" ");
    console.log("-->" + " " + "Desafio" + " " + "<--")
    console.log(" ");
}

function cabecalho3(){
    console.log("Seu primeiro número" + " " + "=" + " " + n1);
    console.log("Seu segundo número" + " " + "=" + " " + n2);
    console.log(" ");
}

function calcSoma(n1, n2){
    console.log("A soma é: " + (n1 + n2));
}

function calcSub(n1, n2){
    console.log("A Diferença é: " + (n1 - n2));
}

function calcMult(n1, n2){
    console.log("A Multiplicação é: " + (n1 * n2));
}

function calcDiv(n1, n2){
    console.log("A Divisão é: " + (n1 / n2));
}

//----------------------------- Variáveis --------------------------------

cabecalho()

nomeCompleto(nomePrompt, snomePrompt)

idade(idadePrompt)

genero(generoPrompt)

cabecalho2()

cabecalho3()

calcSoma(n1, n2)

calcSub(n1, n2)

calcMult(n1, n2)

calcDiv(n1, n2)

//------------------------------------------------------------------------

