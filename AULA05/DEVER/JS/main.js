//----------------------- Trabalho parte 1 ----------------------------

console.log("Trabalho - Parte 1")

console.log(" ")

// Recebendo Nome pelo Window.prompt
var nomePrompt = window.prompt("Digite o primeiro nome do aluno:");

// Recebendo Sobrenome pelo Window.prompt
var snomePrompt = window.prompt("Digite o sobrenome do aluno:");

// Declarando var para nome completo
let nomeCompleto = (nomePrompt + " " + snomePrompt)

let notas = []; //-- Declarando array vazio

// Fazendo push no array acima utilizando window.prompt
notas.push(Number(window.prompt("Digite a nota da av1")))

notas.push(Number(window.prompt("Digite a nota da av2")))

notas.push(Number(window.prompt("Digite a nota da av3")))

notas.push(Number(window.prompt("Digite a nota da av4")))

// Calculando média com os dados do array
let media = (notas[0] + notas[1] + notas[2] + notas[3]) / 4;

// Especificando condicões para aprovação
if (media >= 7) {
    console.log(nomeCompleto + " está aprovado! Sua média foi " + media)
} else {
    console.log(nomeCompleto + " está reprovado! Sua média foi " + media)
}

//----------------------- Trabalho parte 2----------------------------

console.log(" ")
console.log("Trabalho - Parte 2")
console.log(" ")

let estados = ["RJ","SP","MG","ES"]; //-- Declarando array com as siglas dos estados da região sudeste.

console.log(estados)