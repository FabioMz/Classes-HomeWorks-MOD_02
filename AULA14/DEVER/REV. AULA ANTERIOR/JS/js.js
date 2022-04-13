var pets = [];

class Cliente {
    nome;
    especie;
    servico;
    agendamento;

    constructor(p_nome, p_especie, p_servico, p_agendamento) {
        this.nome = p_nome;
        this.especie = p_especie;
        this.servico = p_servico;
        this.agendamento = p_agendamento;
    }
}

function cadastrar() {
    pets.push(new Cliente(
        document.getElementById("inputNome").value,
        document.getElementById("inputEspecie").value,
        document.getElementById("inputServico").value,
        document.getElementById("inputDia").value
    ));

    document.getElementById("form-pet").reset();
    exibirAgenda();
}

function exibirAgenda() {

    let html = "";

    let i = 0;
    for(i; i < pets.length; i++) {
        html += "<div class='card col'>" +
                    "Nome: " + pets[i].nome + "<br/>" +
                    "Espécie: " + pets[i].especie + "<br/>" +
                    "Serviço: " + pets[i].servico + "<br/>" +
                    "Agendamento: " + pets[i].agendamento + "<br/>" +
                "</div>";
    }

    document.getElementById("resultados").innerHTML = html;

}