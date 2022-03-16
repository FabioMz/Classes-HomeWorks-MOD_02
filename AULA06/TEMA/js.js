// // FOR e WHILE

// // let nome = window.prompt("Qual seu nome?");

//     //nome.toUpperCase() == "JUCA" -> o texto todo em maiúsculo
// // while(nome.toLowerCase() != "juca"){
// //     //nome.emLetraMinúscula diferente de "juca"
// //     window.alert(nome + " nome feio pacas!");
// //     nome = window.prompt("Tenta de novo: Qual seu nome?");
// // }

// let idade = Number(window.prompt("Informe a idade"));

// do{
//     console.log("Idade digitada  foi: " + idade);
//     if(idade > 18){
//         idade = Number(window.prompt("Informe a idade"));
//     }
// }while(idade > 18);

let numero = 10;

while(numero < 10){
    console.log(numero);
    //numero = numero + 1;
    numero++; // ++ é incremento de 1 unidade
}

console.log("valor final do número: " + numero);

//numero = 0;

do{
    console.log(numero);
    numero++;
}while(numero < 10);

console.log("Número ficou: " + numero);

let array = []; 

// do{
//     array.push(window.prompt("Digite uma fruta"))
// }while(array.length < 10);

console.log(array)

let array2 = [];

// while(array2.length < 10){
//     array2.push(window.prompt("Digite uma fruta"));
// }
console.log(array2)

let senha;
let contador = 0;

do{
    if(contador == 3){
        alert("Usuário bloqueado, volte mais tarde!");
        //comando para atualizar banco de dados com
        // bloqueio do usuário
    } else{
        senha = window.prompt("Digite a senha:")
    }
    contador++;
     
}while(senha != "a minha senha");

alert("ENTROU!!")
