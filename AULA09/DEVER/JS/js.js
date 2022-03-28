// VARIAVEIS GLOBAIS ----------------------------------------------------

var dadosCarro = [];

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

    dadosCarro.push([nome, telefone, model, placa, ano, cor, preco]);

    window.alert("Anunciado com Sucesso!")

    document.getElementById("form-anuncio");
}

// ----------------------------------------------------------------------

// FUNCTION EXIBIR CADASTROS --------------------------------------------

function exibAnuncio() {
    
    let texto = "";
    for(let i= 0; i < dadosCarro.length; i++){
        texto += '<div class="col-md-3 card">' +
                    "Nome: "     +   dadosCarro[i][0] + "<br/>" +
                    "Telefone: " +   dadosCarro[i][1] + "<br/>" +
                    "Modelo: "   +   dadosCarro[i][2] + "<br/>" +
                    "Placa: "    +   dadosCarro[i][3] + "<br/>" +
                    "Ano: "      +   dadosCarro[i][4] + "<br/>" +
                    "cor: "      +   dadosCarro[i][5] + "<br/>" +
                    "Preço: "    +   dadosCarro[i][6] +
                '</div>'
    }

    document.getElementById("cardsAnun").innerHTML = texto;
    document.getElementById("divResult").style.display = "block";

}

// ----------------------------------------------------------------------