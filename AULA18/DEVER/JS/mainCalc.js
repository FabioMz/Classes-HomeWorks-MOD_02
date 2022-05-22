const visor = document.getElementById("visor");
var memoria = 0;
var operacao = "";
var backup = "";

function numero(btn){ // inclui valores digitados verificando se já há pontos na tela, se houver ignora o comando de ponto, se não adiciona um novo 
    if(btn == '.' && visor.value.indexOf('.') < 0){
        visor.value += btn;
    } else if (btn != '.'){
        visor.value += btn;
    }
}

function operador(btn){ // adiciona operadores
    memoria =  Number(visor.value);
    visor.value = "";
    operacao = btn;
    document.getElementById("histCont").style.display = "block";
    document.getElementById("histSaida").innerHTML += memoria + " " + operacao + " ";
}

function apagar() { // backspace no visor 
    visor.value = visor.value.slice(0, -1);
}

function raiz() { // √² 
    let total = Math.sqrt(Number(visor.value));
    document.getElementById("histSaida").innerHTML += "√" + visor.value + " " + "=" + " " + total + '</br>'
    visor.value = total;
}

function porcento() { // %
    document.getElementById("histSaida").innerHTML += " (" + visor.value + "%" + ") ";
    visor.value = memoria * Number(visor.value) / 100;
}

function igual(btn){ // Função p/ gerar igualdade (esta função também gera o histórico na página)
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


    document.getElementById("histCont").style.display = "block";
    document.getElementById("histSaida").innerHTML += valor + " " + btn + " " + visor.value + '</br>';
}

function adMemoria() { // M+
    backup = visor.value;
    document.getElementById("histCont").style.display = "block";
    document.getElementById("mem").innerHTML = "M = " + backup + '</br>';
    // switch(backup){
    //     default:
    //         document.getElementById("histCont").style.display = "block";
    //         document.getElementById("mem").innerHTML += '<span class="spanBackup">' + "M = " + backup + '<span class="col">' + '</br>';
    //         break;
    //     case document.getElementById("mem").innerHTML.value != '':
    //         document.getElementById("mem").innerHTML = "";
    //         document.getElementById("mem").innerHTML = '<span class="spanBackup">' + "M = " + backup + '<span class="col">' + '</br>';
    //         break;
    // }
}

function limpaMemoria() { // M-
    backup = "";
    visor.value = "";
    document.getElementById("mem").innerHTML = ""
}

function pegaMemoria() { // M.
    visor.value = backup;
}

function trocaSinal() { // Troca sinal positivo p/ negativo e vice versa
    visor.value = (visor.value * -1);
}

function potencia(btn) { // 
    let valor = Number(visor.value);
    document.getElementById("histCont").style.display = "block";
    document.getElementById("histSaida").innerHTML += valor + btn + " = " + valor * valor  + '</br>';
    visor.value = valor * valor;
}

function limparVisor() { // Limpa tudo, visor e histórico
    visor.value = visor.value.slice(0, length);
    memoria = 0;
    limpaMemoria();
    limparHist();
    fechaHist();
}

function limparVisorUlt() { // Limpa apenas oque está no visor da calculadora
    visor.value = "";
}

function limparHist() {
    document.getElementById("histSaida").innerHTML = '<div id="mem">'+'</div>'; // Função para limpar histórico
}

function fechaHist() {
    document.getElementById("histCont").style.display = "none"; // Função para fechar histórico
    limparHist();
}