var clientes = []

class Cliente {
    nome;
    especie;
    servico;
    agendamento;

    constructor(nome, especie, servico, agendamento){
        this.nome = nome;
        this.especie = especie;
        this.servico = servico;
        this.agendamento = agendamento;
    }
}

function agendar(){
    clientes.push(new Cliente(
        document.getElementById("inputNome").value,
        document.getElementById("inputEspecie").value,
        document.getElementById("inputServ").value,
        document.getElementById("inputAgend").value
    ));

    document.getElementById("formPets").reset();
    exibirAgenda();
}

function exibirAgenda(){
    let html = "";
    let hoje = new Date();

    let i = 0;
    for( i ; i < clientes.length ; i++){
        let agendamento = new Date(clientes[i].agendamento);

        if( agendamento.getDate()       >= hoje.getDate() && 
            agendamento.getMonth()      >= hoje.getMonth() &&
            agendamento.getFullYear()   >= hoje.getFullYear()
          ){
            html += '<div class="card">'+
                    '<img class="cardBg" src="./CSS/IMG/card.png" alt="Card Background"/>'+
                        '<div class="dadosCard">'+
                            'Nome: ' + clientes[i].nome + '<br/>'+
                            'Esp.: ' + clientes[i].especie + '<br/>'+
                            'Serv.: '+ clientes[i].servico +'<br/>'+
                            'Data: '+ clientes[i].agendamento + '<br/>'+
                        '</div>'+
                    '</div>';
            }
    }
    
    document.getElementById("divCards").innerHTML = html;
}