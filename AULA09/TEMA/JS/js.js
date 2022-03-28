// VARIAVEIS GLOBAIS ----------------------------------------------------

var pessoas = [];

// ----------------------------------------------------------------------

// FUNCTION CADASTRAR ---------------------------------------------------

function cadastrar() {
    let nome = document.getElementById("inputNome").value;
    let telefone = document.getElementById("inputTelefone").value;
    let email = document.getElementById("inputMail").value;
    let nascimento = document.getElementById("inputNasc").value;
    let insta = document.getElementById("inputInsta").value;
    let user = document.getElementById("inputUser").value;
    let pass = document.getElementById("inputPass").value;

    pessoas.push([nome, telefone,email, nascimento, insta, user, pass]);

    window.alert("Pessoa Cadastrada com Sucesso!")

    document.getElementById("form-cadastro");
}

// ----------------------------------------------------------------------

// FUNCTION EXIBIR CADASTROS --------------------------------------------

function exibCadastro() {
    
    let texto = "";
    for(let i= 0; i < pessoas.length; i++){
        texto += '<div class="col-md-3 card">' +
                    "Nome: " +       pessoas[i][0] + "<br/>" +
                    "Telefone: " +   pessoas[i][1] + "<br/>" +
                    "E-mail: " +     pessoas[i][2] + "<br/>" +
                    "Nascimento: " + pessoas[i][3] + "<br/>" +
                    "Instagram: " +  pessoas[i][4] + "<br/>" +
                    "Usuário: " +    pessoas[i][5] + "<br/>" +
                    "Senha: " +      pessoas[i][6] +
                '</div>'
    }

    document.getElementById("resultado").innerHTML = texto;
    document.getElementById("divResult").style.display = "block";

}

// ----------------------------------------------------------------------