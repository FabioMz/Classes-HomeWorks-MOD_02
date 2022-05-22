// Moment Data Atual
let dataAtual = moment(moment().format("L"), "MM/DD/YYYY");

let data = new Date();//pegando a data do sistema
let dataBr = data.getDate() + "/" + (data.getMonth()+1) + "/" + data.getFullYear();

// Função Consultar
function consultar() {

    document.getElementById("spanDatDoc").innerHTML = dataBr;
    document.getElementById("spanDatProc").innerHTML = dataBr;

    console.log(" "); // QUEBRA
    let nome = document.getElementById("inputNome").value; // Recebendo Nome
    console.log("Nome preenchido: " + nome);

    console.log(" "); // QUEBRA
    let matr = Number(document.getElementById("inputMatr").value); // Recebendo Matrícula
    console.log("Matrícula preenchida: " + matr);
    document.getElementById("spanNomeMatr").innerHTML = nome + " / " + "Matr. " + matr;

    console.log(" "); // QUEBRA
    let valorBol = Number(document.getElementById("inputValor").value); // Recebendo Valor do Boleto
    console.log("Valor do documento preenchido: R$" + valorBol);
    document.getElementById("spanValDoc").innerHTML = "R$ " + valorBol;

    console.log(" "); // QUEBRA
    let pag = document.getElementById("inputPag").value;  // Recebendo Data de Pagamento
    let dataPag = moment(moment(pag).format("L"), "MM/DD/YYYY"); // Transferindo Data Pag. do input pro moment
    let arrayPag = pag.split("-", 3); // Organizando data com .split() em padrão brazileiro
    console.log("Data Pag. preenchida: " + arrayPag[2] + "/" + arrayPag[1] + "/" + arrayPag[0]);
    document.getElementById("spanPago").innerHTML = "PAGO DIA " + arrayPag[2] + "/" + arrayPag[1] + "/" + arrayPag[0];

    console.log(" "); // QUEBRA
    let venc = document.getElementById("inputVenc").value;  // Recebendo Data de Vencimento
    let dataVenc = moment(moment(venc).format("L"), "MM/DD/YYYY"); // Transferindo Data Venc. do input pro moment
    let arrayVenc = venc.split("-", 3); // Organizando data com .split() em padrão brazileiro
    console.log("Data Venc. preenchida: " + arrayVenc[2] + "/" + arrayVenc[1] + "/" + arrayVenc[0]);
    document.getElementById("spanDatVenc").innerHTML = arrayVenc[2] + "/" + arrayVenc[1] + "/" + arrayVenc[0];

    // Demarcando diferença entre datas  -----------------
    let diff = dataPag.diff(dataVenc);
    let diasDiff = moment.duration(diff).asDays();
    let intervalDias = moment.duration(diff).asDays();


    if(diasDiff < 0) {
        intervalDias = diasDiff * (-1);
    };

    if(diasDiff > 0) {
        console.log(" "); // QUEBRA
        console.log("Pagamento efetuado com " + intervalDias + " dias de atraso!");
        document.getElementById("spanAtraso1").innerHTML = "Pagamento efetuado com " + intervalDias + " dias de atraso e,";
        document.getElementById("spanAtraso2").innerHTML = "portanto, sujeito a multas!";

        let multaFix = 11 * valorBol / 100;

        console.log(" "); // QUEBRA
        console.log("Multa Fixa - R$" + multaFix);
        document.getElementById("spanMulta").innerHTML = "+ R$ " + multaFix;

        let multaDia = (1.2 * valorBol / 100);

        console.log("Juros/dia - R$" + multaDia);

        let multaFinal = multaFix + (multaDia * intervalDias)
        document.getElementById("spanJuros").innerHTML = "+ R$ " + (multaDia * intervalDias);

        console.log("Multa Total - R$" + multaFinal);

        console.log(" "); // QUEBRA
        console.log("Valor à pagar R$" + (Number(valorBol) + Number(multaFinal)));
        document.getElementById("spanTotal").innerHTML = "R$ " + (Number(valorBol) + Number(multaFinal));

    } else if(diasDiff < -4) {

        let desconto = 10 * valorBol / 100;

        console.log(" "); // QUEBRA
        console.log("Pagamento " + intervalDias + " dias adiantado. Desconto de 10% sob R$" + valorBol + " (Valor descontado R$"+ desconto + ")." + " Valor à pagar R$" + (valorBol - desconto));
        document.getElementById("spanValDesc").innerHTML = "- R$ " + desconto;
        document.getElementById("spanTotal").innerHTML = "R$ " + (Number(valorBol) - Number(desconto));
        document.getElementById("spanAdianto").innerHTML = "Pagamento " + intervalDias + " dias adiantado! 10% de desconto!";

    } else {

        console.log(" "); // QUEBRA
        console.log("Pagamento em dia! Valor à pagar permanece R$" + valorBol);
        document.getElementById("spanTotal").innerHTML = "R$ " + valorBol;

    }; // ---------------------------------------------------
    

        document.getElementById("boletCont").style.display = "block";
        document.getElementById("formDadosAluno").reset();

} // FIM DA FUNÇÃO ---------------------------------------