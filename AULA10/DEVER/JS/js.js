// VARIAVEIS GLOBAIS ----------------------------------------------------

var dadosCarro = [];

var dadosMoto = [];

// ----------------------------------------------------------------------

// FUNCTION CADASTRAR ---------------------------------------------------

function anuciar() {
    let nome = document.getElementById("inputNome").value;
    let telefone = document.getElementById("inputTel").value;
    let model = document.getElementById("inputModel").value;
    let placa = document.getElementById("inputPlaca").value;
    let ano = document.getElementById("inputAno").value;
    let cor = document.getElementById("inputCor").value;
    let preco = document.getElementById("inputPreco").value;
    let categoria = document.getElementById("selectVeic").value;

    switch (categoria) {

        default:

            alert("Favor, selecionar a categoria do veículo!");
            document.getElementById("form-anuncio").reset();
            break;
        case "carro":

            dadosCarro.push([nome, telefone, model, placa, ano, cor, preco]);

            window.alert("Carro anunciado com Sucesso!")

            document.getElementById("form-anuncio").reset();
            break;

        case "moto":

            dadosMoto.push([nome, telefone, model, placa, ano, cor, preco]);

            window.alert("Moto anunciada com Sucesso!")

            document.getElementById("form-anuncio").reset();
            break;
    }
}

// ----------------------------------------------------------------------

// FUNCTIONS PARA EXIBIR ANÚNCIOS ---------------------------------------


function exibAnuncioCarro() { // BUTTON P/ EXIBIR ANÚNCIO DE CARRO

    let anuncioCarro = "";
    for (let i = 0; i < dadosCarro.length; i++) {
        anuncioCarro += '<div class="col-md-3 cardCarro">' +
            "Nome: "     + dadosCarro[i][0] + "<br/>" +
            "Tel: "      + dadosCarro[i][1] + "<br/>" +
            "Modelo: "   + dadosCarro[i][2] + "<br/>" +
            "Placa: "    + dadosCarro[i][3] + "<br/>" +
            "Ano: "      + dadosCarro[i][4] + "<br/>" +
            "cor: "      + dadosCarro[i][5] + "<br/>" +
            "Preço: "    + dadosCarro[i][6] +
            '</div>'
    }

    document.getElementById("cardsAnunCarro").innerHTML = anuncioCarro;
    document.getElementById("divCardsCarro").style.display = "block";

} // -------------------------------------------------------------

function exibAnuncioMoto() { // BUTTON P/ EXIBIR ANÚNCIO DE MOTO

    let anuncioMoto = "";
    for (let i = 0; i < dadosMoto.length; i++) {
        anuncioMoto += '<div class="col-md-3 cardMoto">' +
            "Nome: "      +  dadosMoto[i][0] + "<br/>" +
            "Tel: "       + dadosMoto[i][1] + "<br/>" +
            "Modelo: "    + dadosMoto[i][2] + "<br/>" +
            "Placa: "     + dadosMoto[i][3] + "<br/>" +
            "Ano: "       + dadosMoto[i][4] + "<br/>" +
            "cor: "       + dadosMoto[i][5] + "<br/>" +
            "Preço: "     + dadosMoto[i][6] +
            '</div>'
    }

    document.getElementById("cardsAnunMoto").innerHTML = anuncioMoto;
    document.getElementById("divCardsMoto").style.display = "block";

} // -------------------------------------------------------------

// ----------------------------------------------------------------------