let array = [];

while(0==0){
    let fruta = window.prompt("Digite uma nova fruta")
    if(fruta.toUpperCase() == "SAIR"){
        break;//interrompe o loop
    }
    if(array.indexOf(fruta) >=0){
        window.alert("Fruta já cadastrada!")
    }else{
        array.push(fruta);
    }
    
}

console.log(array);
console.log("Fruta à fruta:")
let index = 0;

while(index < array.length){
    console.log((index + 1) +"ª fruta: " + array[index]);
    index++;
}

console.log("\n\nUsando FOR: ");
for(let i = 0; i < array.length; i++){
// index; condição; ação com o index    
    console.log((i + 1) +"ª fruta: " + array[i]);
}

for(let i = 0; i < 10 ; i++){
    console.log(i)
}
console.log("");
for(let i = 1; i <= 10 ; i++){
    console.log(i)
}

let contador = 10;
for(contador; contador >= 0; contador--){
    console.log(contador);
}

let pessoas = [];

while(0==0){
    if(!window.confirm("Deseja Cadastrar?")){
        break;
    }

    let nome = window.prompt("Nome");
    let idade = Number(window.prompt("Idade"));
    let peso = Number(window.prompt("Peso"));
    let altura = Number(window.prompt("Altura"));

    let pessoa = [nome, idade, peso, altura];

    pessoas.push(pessoa);
    //pessoas.push([nome,idade,peso,altura]);
}

for(let i = 0 ; i < pessoas.length ; i++){
    console.log("Nome: "    + pessoas[i][0]);
    console.log("Idade: "   + pessoas[i][1]);
    console.log("Peso: "    + pessoas[i][2]);
    console.log("Altura: "  + pessoas[i][3]);
    console.log("-----------------------------")
}

