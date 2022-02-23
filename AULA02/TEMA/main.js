function soma(){
    console.log(2 + 2)
}

soma();

function soma2(n1, n2){
    console.log("O Total é:" + (n1 + n2))
}

soma2(15, 17);
soma2(13, 48);
soma2(4, 8);

function subtrai(n1, n2){
    console.log(n1 - n2);
}

subtrai(10, 8);

// Crie um método chamado nomeCompleto
//que receba nome e sobrenome,
//e faça um console.log com:
//"Nome Completo: Nome Sobrenome"

function nomeCompleto(nome, sobrenome){
    console.log("Nome Completo: " + nome + " " + sobrenome)
}

nomeCompleto("Fábio", "Mozart");
nomeCompleto("Tom", "Cruise");
nomeCompleto("André", "Neves");

//-----------------------------------------------------------

// 7 == "7" vdd ; 7 === "7" ment; 7 === 7 vdd.
//Texto === String

recebeNome = window.prompt("Nome: ");
recebeSnome = window.prompt("Sobrenome: ");
nomeCompleto(recebeNome, recebeSnome);

//Extensão Útil para diferenciar parenteses --> Bracket Pair Colorizer