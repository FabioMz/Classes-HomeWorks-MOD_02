//Conversão de valores

/*

--> Tipos de dados <--

String = Texto.

Int = Inteiros.

Float = Números c/ casas decimais.

Double = O dobro de casas do Float (48).

Boolean = Booleanos, valores lógicos (Verdadeiro, falso ou comparações).

Char = Character, caractere, uma única letra.

*/

//parse == converter
let valor1 = "112.44";
let valorFloat = parseFloat(valor1); // Converter o valor1 para float
let valorInt = parseInt(valor1); // Converter o valor1 para Inteiro
let valorNumber = Number(valor1); // Converter o valor1 para o número que lhe couber 

console.log(valorFloat);
console.log(valorInt);
console.log(valorNumber);

function porCima(){
    window.alert("Olá, você está em cima da imagem!");
}

function seMovendo(){
    console.log("Mouse se movendo sobre a imagem.");
}

function saiuImagem(){
    window.alert("Saiu da imagem!");
}