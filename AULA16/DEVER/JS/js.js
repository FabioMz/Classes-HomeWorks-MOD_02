let data = moment("12-08-1991", "DD-MM-YYYY");

let meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
    'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];
let diaSemana = ['Domingo', 'Segunda-feira', 'Terça-feira', 'Quarta-feira', 'Quinta-feira', 'Sexta-feira', 'Sábado'];

let data1 = data.format("DD/MM/YYYY")

let data2 = diaSemana[1] + ", " +
    data.format("DD") + " de " +
    meses[7] + " de " +
    data.format("YYYY") + ".";

let data3 = data.format("MM-DD-YYYY")

document.getElementById("divDemonstraDatas").innerHTML = data1 + '<br/>' + data2 + '<br/>' + data3;