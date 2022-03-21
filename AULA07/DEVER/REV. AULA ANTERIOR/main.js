var pessoas = [];
var nome, idade, peso, altura;

do{
    nome = window.prompt("Nome");
    if(nome.toLowerCase() == "sair"){
        break;//para o loop
    }
    idade = window.prompt("Idade");
    peso = Number(window.prompt("Peso (Kg)")) ;
    altura = Number(window.prompt("Altura (cm)") );
    
    pessoas.push(nome);
    pessoas.push(idade);
    pessoas.push(peso);
    pessoas.push(altura);
}while(true);

console.log(pessoas);