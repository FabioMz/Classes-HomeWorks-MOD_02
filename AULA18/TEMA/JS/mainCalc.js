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
}

function igual(){
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
}