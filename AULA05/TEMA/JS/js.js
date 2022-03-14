let frutas = ["uva","pera","maçã","banana"];
/* Array é uma variável com várias casas para 
 armazenar valores. A primeira casa sempre será 0 */

//array de uma unica direção, chamamos de vetor

console.log(frutas[0]);
console.log(frutas[4]);

frutas.push("mamão");//coloca mais um valor ao final do array
console.log(frutas[4]);

console.log(frutas);
console.log("Tamanho do array: " + frutas.length);

frutas[2] = "manga"; //substituí o valor da casa 2
console.log(frutas);

frutas.pop();//apaga a ultima casa
console.log(frutas);

delete frutas[0];//apageui o valor da casa 0

console.log(frutas);

let carros = []; //iniciando um array vazio

console.log(carros);

carros[0] = "Ford Ranger";
carros.push("Dogde Dakota");

console.log(carros);    

let numeros = [0, ,450];
console.log(numeros);

