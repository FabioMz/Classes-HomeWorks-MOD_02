/*function exibeTexto(){
    console.log("Rodou");
}
setTimeout(exibeTexto, 3000);

setTimeout(function(){ 
    //declarando função  inicializada na hora
    console.log("timmer 2")
}, 5000);

var segundos = 1

var contaSegundos = setInterval(() => {
        //arrow function, função de retorno imediato
                    console.log("Segundo: " + segundos);

                    if(segundos >= 5){
                        clearInterval(contaSegundos);
                    }
                    segundos++;
                    },1000);

var tempo = setInterval(() => {
    //roda a cada intervalo de tempo
    console.log("contando...")
}, 1000);

setTimeout(() => {//roda uma vez e para
    clearInterval(tempo);
    //clearTimeout(variavelcomoTimmer)
}, 5000);
*/
/*
Crie um contador decrescente que incie em 60, e vá até 0,
exibido no html.
crie um botão para PARAR o contador.
*/
var divContador = document.getElementById("contador");
var tempo = 59

var contador =  setInterval(()=>{
    divContador.innerHTML = tempo;

    if(tempo == 0){
        clearInterval(contador);
    }

    tempo--;
}, 1000)

function parar(){
    clearInterval(contador);
}

function continuar(){
    contador =  setInterval(()=>{
        divContador.innerHTML = tempo;
    
        if(tempo == 0){
            clearInterval(contador);
        }
    
        tempo--;
    }, 1000)
}

function resetar(){
    divContador.innerHTML = 60;
    tempo = 59;
    clearInterval(contador);
}