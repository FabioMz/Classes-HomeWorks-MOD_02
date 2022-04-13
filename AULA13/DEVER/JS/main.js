//------------------------------- Variáveis globais
var contatos = [];
//-------------------------------------------------

//----------------------------------------- Classes
class Contato {
    nome;
    telefone;
    email;
}
//-------------------------------------------------

//--------------------------------------- Functions
function cadastrar() {

    let c = new Contato();

    c.nome = document.getElementById("inputNome").value;
    c.telefone = document.getElementById("inputTel").value;
    c.email = document.getElementById("inputEmail").value;

    contatos.push(c);

    document.getElementById("formContatos").reset();

    exibirContatos();

}
//-------------------------------------------------

//--------------------------------- Function Exibir
function exibirContatos() {

    let html = "";
    let i = 0;

    for(i; i < contatos.length; i++) {
        html += '<div class="card">' +
                    '<img class="imgCard" src="./CSS/IMG/cardBg.jpg" alt="fundoCard">' +
                    '<div class="dadosCard">' +
                        'Nome: ' + contatos[i].nome + '<br/>' +
                        'Telefone: ' + contatos[i].telefone + '<br/>' +
                        'Email: ' + contatos[i].email + '<br/>' +
                    '</div>' +
                '</div>';
    }

    if(i==0) {
        html = '<div class="noResult">SEM CADASTROS!</div>'
    }

    document.getElementById("divResultado").innerHTML = html;
}
//-------------------------------------------------