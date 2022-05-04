// function exibeTexto() {
//     console.log("Rodou!");
// }
// // setTimeout roda o uma vez e para, como se fosse um cronômetro
// setTimeout(exibeTexto, 3000);


// setTimeout(function () {
//     // Desclarando função inicializada na hora
//     console.log("Timer 2")
// }, 5000);


// var segundos = 1
// // SetInterval roda a cada intervalo de tempo
// var contaSegundos = setInterval(() => {
//     // Arrow function, função de retorno imediato
//     console.log("Segundo: " + segundos);
//     if (segundos >= 5) {
//         clearInterval(contaSegundos);
//     }
//     segundos++;
// }, 1000);

// var tempo = setInterval(() => {
//     console.log("Contando...")
// }, 1000);

// setInterval(() => {
//     clearInterval(tempo);
//     // clearTimeout(variavelcomoTimer) <<  Para parar o clarTimeout
// }, 5000);



/* ===================================================================
Crie um contador decrescente que inicie em 60, e vá até 0,
exibindo no html.
crie um botão para PARAR, um para CONTINUAR e outro para RESETAR o contador.
*/
var tempo;
var contaTempo;

function rodaCrono() {
    tempo = 60

    contaTempo = setInterval(() => {
        document.getElementById("saidaDesafio").innerHTML = tempo;
        if (tempo == 0) {
            clearInterval(contaTempo);
        }
        tempo--;
    }, 1000);
}

function paraCrono() {
    clearInterval(contaTempo);
}

function continueCrono() {
        contaTempo = setInterval(() => {
        document.getElementById("saidaDesafio").innerHTML = tempo;
        if (tempo == 0) {
            clearInterval(contaTempo);
        }
        tempo--;
    }, 1000);
}

function resetCrono() {
    clearInterval(contaTempo);
    tempo = 60;
    document.getElementById("saidaDesafio").innerHTML = tempo;
}