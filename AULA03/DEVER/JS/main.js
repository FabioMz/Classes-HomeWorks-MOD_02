// Functions -- 

// Botão 1 - (Dados e IMC) ------------------------------------------------------------

function recebeDados() {
    // Nome e Sobrenome --
    console.log("========== Dados ==========")

    console.log(" ")

    recebeNomePrompt = window.prompt("Digite seu nome:")

    recebeSnomePrompt = window.prompt("Digite seu sobrenome:")

    console.log("Nome Completo: " + recebeNomePrompt + " " + recebeSnomePrompt)

    // Idade --
    recebeIdadePrompt = Number(window.prompt("Digite sua idade:"))

    console.log("Idade: " + recebeIdadePrompt + " " + "Anos")
    
    // Peso --
    recebePesoPrompt = parseFloat(window.prompt("Digite seu peso:"))

    console.log("Peso: " + recebePesoPrompt + " " + "kg")
    
    // Altura --
    recebeAlturaPrompt = parseFloat(window.prompt("Digite sua altura:"))

    console.log("Altura: " + recebeAlturaPrompt)

    // IMC --
    let IMC = parseFloat(recebePesoPrompt / (recebeAlturaPrompt * recebeAlturaPrompt))

    console.log("IMC: " + IMC)

    console.log(" ")
}
// -----------------------------------------------------------------------------------

// Botão 2 - (Cálculo de Valores) ----------------------------------------------------

function recebeValores() {
    console.log("========== Cálcular Quadrado e Raiz ==========")

    console.log(" ")

    recebeN1Prompt = Number(window.prompt("Digite um número:"))

    console.log("1° Valor recebido - " + recebeN1Prompt)

    console.log(recebeN1Prompt + "² = " + (recebeN1Prompt * recebeN1Prompt))

    console.log("A √² de " + recebeN1Prompt + " = " + Math.sqrt(recebeN1Prompt))

    console.log(" ")

    recebeN2Prompt = Number(window.prompt("Digite outro número:"))

    console.log("2° Valor recebido - " + recebeN2Prompt)

    console.log(recebeN2Prompt + "² = " + (recebeN2Prompt * recebeN2Prompt))

    console.log("A √² de " + recebeN2Prompt + " = " + Math.sqrt(recebeN2Prompt))

    console.log(" ")
}

// -----------------------------------------------------------------------------------

// Botão 3 - (Desafio - Inteiro Aleatório) -------------------------------------------

function randomIntFromInterval(min, max) { 
    return Math.floor(Math.random() * (max - min + 1) + min)
  }

function intAleat() {
    const rndInt = randomIntFromInterval(0, 100)
    
    console.log("========== Inteiro entre 0 e 100 ==========")

    console.log(" ")

    console.log(rndInt)

    console.log(" ")
}

// -----------------------------------------------------------------------------------

// Botão 4 - (Desafio - Valor Maior) -------------------------------------------------

function recebeValores2() {
    console.log("========== Valor Maior ==========")

    console.log(" ")

    recebeN1Prompt = Number(window.prompt("Digite um número:"))

    console.log("1° Valor recebido - " + recebeN1Prompt)

    console.log(" ")

    recebeN2Prompt = Number(window.prompt("Digite outro número:"))

    console.log("2° Valor recebido - " + recebeN2Prompt)

    console.log(" ")

    console.log(Math.max(recebeN1Prompt, recebeN2Prompt) + " > " + Math.min(recebeN1Prompt, recebeN2Prompt))

    console.log(" ")
}

// -----------------------------------------------------------------------------------




