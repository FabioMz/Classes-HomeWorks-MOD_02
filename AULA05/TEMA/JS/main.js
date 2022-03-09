let frutas = ["uva","pera","maça","banana"];

// Array de uma única direção, chamamos de vetor.

console.log(frutas[0]);
console.log(frutas[4]);

frutas.push("mamão"); // Coloca mais um valor ao final do array.
console.log(frutas[4]);

console.log(frutas);
console.log("Tamanho do array: " + frutas.length);

frutas[2] = "manga"; // Substitui o valor da casa 2
console.log(frutas);

frutas.pop(); // Apaga a última casa do array
console.log(frutas);

delete frutas[0]; // Deletei o dado na casa especificada, no caso, na casa [0].

console.log(frutas);

let carros = []; // Iniciando um Array vazio.

console.log(carros);

carros[0] = "Ford Ranger";
carros.push("Dodge Dakota");

console.log(carros);

let numeros = [0, ,450];
console.log(numeros);
 


