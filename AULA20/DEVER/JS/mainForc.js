let palavraSecreta = ["s", "c", "r", "i", "p", "t"];

let tentativa = []; 

var spanCrono = document.getElementById("cronometro");

var tempo = 59;

var tempoFausto = 1;

var contador =  setInterval(()=>{
    spanCrono.innerHTML = tempo;

    if(tempo <= 10){
        spanCrono.style.color = "red";
    }
    
    if(tempo == 0){
        clearInterval(contador);
        spanCrono.style.display = "none";
        mataFausto();
    }

    tempo--;
}, 1000);

// Função Principal
function tentativas() {
    tentativa.push((document.getElementById("inputL1").value).toLowerCase());
    tentativa.push((document.getElementById("inputL2").value).toLowerCase());
    tentativa.push((document.getElementById("inputL3").value).toLowerCase());
    tentativa.push((document.getElementById("inputL4").value).toLowerCase());
    tentativa.push((document.getElementById("inputL5").value).toLowerCase());
    tentativa.push((document.getElementById("inputL6").value).toLowerCase());

    // Convetendo arrays para Strings para comparação
    palavraSecretaString = palavraSecreta.toString();
    tentativaString = tentativa.toString();

    // Se forem Diferentes
    if(tentativaString != palavraSecretaString){
        var faustoEmCena =  setInterval(()=>{
            vemFausto();
        
            if(tempoFausto == 0){
                clearInterval(faustoEmCena);
                vaiFausto();
            }
        
            tempoFausto--;
        }, 1000)
        tempoFausto = 1;
        tentativa = [];
        document.getElementById("sectForm").reset();
    }

    // Se forem Iguas
    if(tentativaString == palavraSecretaString && tempo > 0){
        clearInterval(contador);
        ganha();
    }
}


// Funções de eventos condicionais
function vemFausto() {
    document.getElementById("faustoCont").style.display = "block";
    spanCrono.style.color = "rgba(255, 255, 255, 0)";
}

function vaiFausto() {
    document.getElementById("faustoCont").style.display = "none";
    spanCrono.style.color = "ivory";
}

function mataFausto() {
    document.getElementById("faustoEnforcadoCont").style.display = "block";
    document.getElementById("btn-tentaSorte").style.display = "none";
    document.getElementById("btn-tentaOutra").style.display = "block";
    document.getElementById("sectForm").style.display = "none";
}

function ganha() {
    document.getElementById("faustoGanhaCont").style.display = "block";
    document.getElementById("btn-tentaSorte").style.display = "none";
    document.getElementById("btn-tentaOutra").style.display = "block";
    document.getElementById("sectForm").style.display = "none";
    spanCrono.style.color = "rgba(255, 255, 255, 0)";
}

function tentaOutra() {
    window.location.replace("./index.html");
}