var resultado = document.getElementById("resultados");
var texto;
var frutas = ["banana", "maçã", "uva", "melão","Jaca", "berinjela"];

var indexDajaca = frutas.indexOf("Jaca");

texto = "<p>" + indexDajaca +"</p>"
resultado.innerHTML += texto;

var indexDaMexirica = frutas.indexOf("mexirica");

texto = "<p>" + indexDaMexirica + "</p>";
resultado.innerHTML += texto;


// var valor = 1;
// valor += 2; // valor = valor + 2;
// valor *= 2; // valor = valor * 2;

// var texto = "A casa é ";
// texto += "azul"; //texto = texto + "azul"; ==a casa é azul

if(frutas.indexOf("Jaca") >= 0){
    frutas[frutas.indexOf("Jaca")] = "limão";
    texto = "<div class='buscaFruta'>" +
                "<p>Fruta encontrada! Novo valor do array: <br/>" +
                    frutas + 
                 "</p>"+
            "</div>";
    resultado.innerHTML += texto;
}else{
    texto = "<div class='buscaFruta'>" +
                "<p>Fruta NÃO encontrada! ARRAY INALTERADO: <br/>" +
                    frutas + 
                 "</p>"+
            "</div>";
}

var nomeCompleto = "Juca Bala da Silva";
var nomes = nomeCompleto.split(" ");

texto = "<div>"+
            "Segue o array: " + nomes +
        "</div>";
resultado.innerHTML += texto;

var data = "17-07-2002";
var data2 = "18/08/2006";

let dataSeparada = data.split("-");
let dataSeparada2 = data2.split("/");

texto = "<div>"+
            "Segue a data1: " + dataSeparada + "<br/>" +
            "Segue a data2: " + dataSeparada2 + "<br/>" +
            "Segue a dia da data1: " + dataSeparada[0] + "<br/>" +
            "Segue a mês da data1: " + dataSeparada[1] + "<br/>" +
            "Segue a ano da data1: " + dataSeparada[2] + "<br/>" +
        "</div>";
resultado.innerHTML += texto;

let frutas2 = frutas.slice(2,4);

texto = "<div>"+
            "Segue as frutas 2: " + frutas2 + "<br/>" +
        "</div>";
resultado.innerHTML += texto;

let nome10Char = nomeCompleto.slice(0,9);//primeira,ultima casa
texto = "<div>"+
            "Nome com 10 letras: " + nome10Char + "<br/>" +
        "</div>";
resultado.innerHTML += texto;

let primeiroNome = nomeCompleto.slice(0,nomeCompleto.indexOf(" "));
texto = "<div>"+
            "primeiro nome: " + primeiroNome + "<br/>" +
        "</div>";
resultado.innerHTML += texto;

/*
https://www.w3schools.com/js/js_array_methods.asp
*/