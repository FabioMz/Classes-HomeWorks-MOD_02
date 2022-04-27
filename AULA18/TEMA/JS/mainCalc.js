const visor = document.getElementById("visor");
var memoria = 0;
var operacao = "";

function numero(btn){
    if(btn == '.' && visor.value.indexOf('.') < 0){
        visor.value += btn;
    } else if (btn != '.'){
        visor.value += btn;
    }
}

function operador(btn){
    memoria =  Number(visor.value);
    visor.value = "";
    operacao = btn;
    document.getElementById("histSaida").innerHTML += memoria + " " + operacao + " ";
}

function apagar() {
    visor.value = visor.value.slice(0, -1);
}

function raiz() {
    let total = Math.sqrt(Number(visor.value));
    document.getElementById("histSaida").innerHTML += "√" + visor.value + " " + "=" + " " + total + '</br>'
    visor.value = total;
}

function porcento() {
    document.getElementById("histSaida").innerHTML += " (" + visor.value + "%" + " )";
    visor.value = memoria * Number(visor.value) / 100;
}

function igual(btn){
    let valor = Number(visor.value);

    switch(operacao){
        case '+':
            visor.value = memoria + valor;
            break;
        case '-':
            visor.value = memoria - valor;
            break;
        case 'x':
            visor.value = memoria * valor;
            break;
        case '÷':
            visor.value = memoria / valor;
            break;
    }


    document.getElementById("histSaida").innerHTML += valor + " " + btn + " " + visor.value + '</br>';
}

function limpar() {
    document.getElementById("histSaida").innerHTML = "";
}