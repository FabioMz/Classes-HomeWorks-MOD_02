function run() {

    // Array geral de dados do usuario
    var dadosUsuario = []

    // Variáveis p/ pegar valores inseridos por input
    var nome =      document.getElementById("inputNome").value;

    // array interno p/ sobrenome
    var arraySnome =  [];

    var snome =     document.getElementById("inputSnome").value;

    arraySnome.push(snome);

    // array interno p/ data de nascimento
    var arrayNasc =   [];

    var diaNasc =  Number(document.getElementById("diaNasc").value);

    var mesNasc =  Number(document.getElementById("mesNasc").value);

    // ajuste na exibição do zero no mês da data
    if(mesNasc <= 9) {
        mesNasc = "0" + mesNasc
    };

    var anoNasc =  Number(document.getElementById("anoNasc").value);

    arrayNasc.push(diaNasc, mesNasc, anoNasc);

    var email =     document.getElementById("inputEmail").value;

    // inserindo dados do array interno no array geral
    dadosUsuario.push(nome, arraySnome, arrayNasc, email);

    // declarando variável do container p/ exibição de dados na página HTML
    var exib =      document.getElementById("exibConteiner");

    // declarando formatação do texto a ser exibido
    textoExib = "<span class = 'exibDados'>" +
                "Nome: " + nome + " " + snome + "<br/>" +
                "Aniversário: " + diaNasc + "/" + mesNasc + "<br/>" +
                "Email: " + email + "<br/>"+"<br/>" +
            "</span>";

    // acrescentando texto à página
    exib.innerHTML += textoExib;

}