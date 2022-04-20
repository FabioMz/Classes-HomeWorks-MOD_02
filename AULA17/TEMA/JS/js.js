let data1 = moment(moment().format("L"), "MM/DD/YYYY");
let data2 = moment("25/12/2022", "DD/MM/YYYY");

console.log(data2);
console.log(data1);

// Armazenando a diferença entre datas
let diff = data2.diff(data1);
let dias = moment.duration(diff).asDays();

if(dias < 0)
    dias = dias * (-1);

console.log("São " + dias + " dias");

/*

Considere que um boleto venceu dia 12/04/2022.
O cliente veio hoje no curso para conseguir pagar.
O valor do boleto é de 200,00.
Sabendo que existe uma multa de atraso de 2%, mais 0,1% por dia, qual o valor atual do boleto?
Imprima no console.

 */

// Problema em Aula --------------------------------------------------------------

console.log(" ");
console.log("----- Problema em Aula -----");
console.log(" ");

let dataVenc = moment("12/04/2022", "DD/MM/YYYY");
let dataPag = moment(moment().format("L"), "MM/DD/YYYY");

console.log(dataVenc);
console.log(dataPag);

let diffBol = dataPag.diff(dataVenc);
let diasAtraso = moment.duration(diffBol).asDays();

if(diasAtraso < 0)
    diasAtraso = diasAtraso * (-1);

console.log("Atraso de " + diasAtraso + " dias");

let valorBol = 200;

if(dias < 1)
    console.log("Pagamento em dia! Valor do Boleto = R$" + valorBol);
    else{

        let multaFix = 2 * valorBol / 100;

        console.log("Multa Fixa = " + multaFix);

        multaDia = (0.1 * valorBol / 100) * 8;

        console.log("Multa por dia = " + multaDia);

        multaFinal = multaFix + multaDia

        console.log("Valor final do boleto = " + (Number(valorBol) + Number(multaFinal)));

    };

// ---------------------------------------------------------------------------------

