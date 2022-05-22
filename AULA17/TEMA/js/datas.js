
let data1 = moment(moment().format("L"), "MM/DD/YYYY");
let data2 = moment("25/12/2022", "DD/MM/YYYY");

console.log(data2);
console.log(data1);
//armazenando a diferença entre os moments
let diff = data2.diff(data1);
let dias = moment.duration(diff).asDays();

if(dias < 0)
    dias = dias * (-1);

console.log("São " + dias + " dias");

/*

considere que um boleto venceu dia 12/04/2022.
O cliente veio hoje no curso para conseguir pagar.
O valor do boleto é de 200,00.
Sabendo que existe uma multa de atraso de 2%, mais 0,1% por dia, qual o valor atual do boleto? Imprima no console

*/

let vencimento = moment("12/04/2022", "DD/MM/YYYY");
let hoje = data1;
let valorBoleto = 200;

let diferenca = hoje.diff(vencimento);
let diasAtraso = moment.duration(diferenca).asDays();

if(dias < 1)
    console.log("Pagamento em dia. Valor à pagar: " + valorBoleto);
else{
    let multa = valorBoleto * 2/100;
    let juros = valorBoleto * (diasAtraso* 0.1)/100;

    let totalComJuros = valorBoleto + multa + juros;

    console.log("Atraso de " + diasAtraso + " dias. Valor Atualizado: " + totalComJuros);
}



