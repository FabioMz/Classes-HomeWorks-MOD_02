

function recebeDados() {
    let nome = window.prompt("Nome Completo");
    let idade = window.prompt("Idade");
    let genero = window.prompt("Gênero");

    console.log("Nome: " + nome + // '\n' quebra a linha no console
                "\nIdade:" + idade +
                "\nGênero: " + genero);
}

//desafio 

function recebeNumeros(){
    let n1 = window.prompt("Valor 1");
    n1 = Number(n1);

    let n2 = Number(window.prompt("Valor2"));

    window.alert("Soma: " + (n1+n2) +
                 "\nsubtracão: " + (n1-n2));
}

function carregada(){
    recebeDados();
    recebeNumeros();
}

// function cadastraPessoa(){
//     nomeCompleto();
//     idade();
//     genero();
// }