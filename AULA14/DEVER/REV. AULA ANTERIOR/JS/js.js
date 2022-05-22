//----------------VARIÁVEIS GLOBAIS

var contatos = [];

//--------------------------------
//-------------------------CLASSES
class Contato{
    nome;
    telefone;
    email;
    constructor(nomeparam, telefoneparam, emailparam){
        this.nome = nomeparam;
        this.telefone = telefoneparam;
        this.email = emailparam;  
    }
}
//-------------------------------
//-----------------------FUNCTIONS

//CADASTRAR----------------------
function cadastra(){
    // let c = new Contato();

    // c.nome = document.getElementById("inputNome").value;
    // c.telefone = document.getElementById("inputTelefone").value;
    // c.email = document.getElementById("inputEmail").value;
    //modo 2
    // let c = new Contato(
    //     document.getElementById("inputNome").value,
    //     document.getElementById("inputTelefone").value,
    //     document.getElementById("inputEmail").value
    //     );
    // contatos.push(c);
    contatos.push(
        new Contato(
            document.getElementById("inputNome").value,
            document.getElementById("inputTelefone").value,
            document.getElementById("inputEmail").value
            )
    );

    document.getElementById("formContato").reset();
    exibirContatos();
}
//-------------------------------
//EXIBE--------------------------
function exibirContatos(){
    let html = "";

    let i = 0;

    for(i ; i< contatos.length ; i++){
        html += '<div class="card">'+
                    '<img class="img-card" src="https://png.pngtree.com/thumb_back/fh260/back_our/20190623/ourmid/pngtree-blue-business-atmosphere-business-card-background-image_243064.jpg" alt="fundo"/>'+
                    '<div class="dados-card">'+
                        'Nome: ' + contatos[i].nome + '<br/>'+
                        'Telefone: '+ contatos[i].telefone + '<br/>'+
                        'E-mail: '+ contatos[i].email +'<br/>'+ 
                    '</div>'+
                '</div>';
    }
    
    if(i == 0){
        html = '<div class="no-result">SEM CADASTROS</div>';
    }

    document.getElementById("divResultados").innerHTML = html;
}
//-------------------------------