let carro = {modelo: "Fiat Uno", cor:"Vermelho", ano:"1994"};

carro.cor = "preto";

let carro2 = carro;

var idade;

function Pessoa(){ //function Class, nome de classe Letra maiúscula
    this.nome = "Fulano";
    this.idade = null;
}

let aluno = new Pessoa();

aluno.idade = 18;
aluno.nome = "juca bala";

let professor =  new Pessoa();

console.log(aluno);
console.log(professor);

class Animal{
    nome;
    som;
    especie;

    emiteSom() {
        console.log("esse animal " + this.som);
    }
}

let dog = new Animal();
dog.nome = "Totó";
dog.especie = "Cachorro";
dog.som = "late";

console.log(dog);
dog.emiteSom();

let cat = new Animal();
cat.nome = "Garfield";
cat.especie = "gato";
cat.som = "reclama da segunda-feira";

cat.emiteSom();

