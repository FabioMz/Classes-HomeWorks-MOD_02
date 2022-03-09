function cadpessoa(){
    let nome = window.prompt("Nome");
    let idade = Number(window.prompt("Idade"));
    let peso = Number(window.prompt("Peso(Kg)"));
    let altura = Number(window.prompt("Altura(m)"));

    let imc = peso/(altura**2);

    console.log("Nome: " + nome +
                "\nIdade: " + idade +
                "\nIMC: " + imc );
}

function calculaValores(){
    let v1 = Number(window.prompt("Valor 1"));
    let v2 = Number(window.prompt("Valor 2"));

    let quadrado1 = v1**2;
    let quadrado2 = v2**2;
    
    let raiz1 = Math.sqrt(v1);
    let raiz2 = Math.sqrt(v2);

    console.log("Quadrado do valor 1: " + quadrado1 +
                "Quadrado do valor 2: " + quadrado2 +
                "Raiz do valor 1: " + raiz1 +
                "Raiz do valor 2: " + raiz2)
}

function valorAleatorio(){
    console.log("Valor aleatório: " + Math.floor((Math.random()*101)));
    console.log("Valor aleatório: " + parseInt((Math.random()*101)));
}

function maiorValor(){
    let v1 = Number(window.prompt("Valor 1"));
    let v2 = Number(window.prompt("Valor 2"));

    //if(booleano){verdade}else{mentira} 
    //booleano expressão lógica (comparação)
    // if(v1 > v2) {
    //     console.log("V1 é o maior!");
    // } else {
    //     if(v1 == v2){
    //         console.log("Eles são iguais");
    //     }else{
    //         console.log("V2 é maior");
    //     }
    // }
    // if(v1 > v2) 
    //     console.log("V1 é o maior!")
    // else if(v1 == v2)
    //         console.log("Eles são iguais")
    //     else
    //         console.log("V2 é maior")
    if(v1 > v2) {
        // v1 > v2 é uma comparação que retorna um booleano
        // booleano são comparações que retornam verdade ou mentira 
        //true ou false
        console.log("V1 é o maior!");
    } else if(v1 == v2){
        console.log("Eles são iguais");
    }else{
        console.log("V2 é maior");
    }
    


    //comparadores lógicos
    /*
    > maior, < menor. >= maior igual, <= menor igual
    == igual, === muito igual
    ! negação, != diferente , <> diferente >< diferente

    && lê-se "e" -> as duas condições precisam ser verdade
    || lê-se "ou" -> apenas uma das condições precisa ser verdade

    */
}