//----------------VARIÁVEIS GLOBAIS

var contatos = [];

//--------------------------------
//-------------------------CLASSES
class Contato{
    uf;
    nome;
    email;
    area;
    tel;
    constructor(uf, nome, email, area, tel,){
        this.uf = uf;
        this.nome = nome;
        this.email = email;
        this.area = area;
        this.tel = tel;
          
    }
}
//-------------------------------
//-----------------------FUNCTIONS

//CADASTRAR----------------------
function cadastra(){

    contatos.push(
        new Contato(
            document.getElementById("inputEstado").value,
            document.getElementById("inputNome").value,
            document.getElementById("inputEmail").value,
            document.getElementById("inputProf").value,
            document.getElementById("inputTel").value,
            )
    );

    document.getElementById("form-contatos").reset();
    exibirContatos();

}
//-------------------------------
//EXIBE--------------------------
function exibirContatos(){
    let html = "";

    let i = 0;

    for(i ; i< contatos.length ; i++){
        html += '<div class="card">'+
                    '<img class="cardBg" src="./CSS/IMG/card.jpg" alt="Card Background"/>'+
                    '<div class="dadosCard">'+
                        'Nome: ' + contatos[i].nome + '<br/>'+
                        'Atuação: ' + contatos[i].area + '<br/>'+
                        'E-mail: '+ contatos[i].email +'<br/>'+
                        'Telefone: '+ contatos[i].tel + '<br/>'+
                        'Estado: '+ contatos[i].uf + '<br/>'+ 
                    '</div>'+
                '</div>';
    }
    
    if(i == 0){
        html = '<div class="no-result">NÃO HÁ CONTATOS CADASTROS</div>';
    }

    document.getElementById("divCards").innerHTML = html;
}
//-------------------------------