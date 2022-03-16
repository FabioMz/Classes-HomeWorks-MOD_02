let nomeAluno =  window.prompt("Nome do aluno");

//FORMA 1
let notas = [];
notas.push(Number(window.prompt("Nota 1")));
notas.push(Number(window.prompt("Nota 2")));
notas.push(Number(window.prompt("Nota 3")));
notas.push(Number(window.prompt("Nota 4")));

/*FORMA 2*/
let notas2 = [
                Number(window.prompt("Nota 1")),
                Number(window.prompt("Nota 2")),
                Number(window.prompt("Nota 3")),
                Number(window.prompt("Nota 4"))
            ];

//FORMA 3

let notas3 = [];
notas3[0]=(Number(window.prompt("Nota 1")));
notas3[1]=(Number(window.prompt("Nota 2")));
notas3[2]=(Number(window.prompt("Nota 3")));
notas3[3]=(Number(window.prompt("Nota 4")));

//FORMA 4

let notas4 = [];
let n1 = Number(window.prompt("Nota 1"));
let n2 = Number(window.prompt("Nota 2"));
let n3 = Number(window.prompt("Nota 3"));
let n4 = Number(window.prompt("Nota 4"));
notas4 = [n1, n2, n3, n4];

console.log("Nome do Aluno: " + nome)

console.log("Média: " + ((notas[0]+notas[1]+notas[2]+notas[3])/4));

let media = (notas2[0]+notas2[1]+notas2[2]+notas2[3])/4;
console.log("Média2 : " + media);
