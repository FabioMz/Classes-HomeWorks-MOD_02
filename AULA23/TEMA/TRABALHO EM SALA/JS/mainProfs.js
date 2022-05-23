var professores = [];

if(sessionStorage.getItem("professores") != undefined){
    professores = JSON.parse(sessionStorage.getItem("professores"));
}

function cadastraProfs(){
    professores.push({
        nome: document.getElementById("nomeInput").value,
        materia: document.getElementById("materInput").value,
        tel: document.getElementById("telInput").value
    })
    sessionStorage.setItem("professores", JSON.stringify(professores));
    document.getElementById("nomeInput").value = "";
    document.getElementById("materInput").value = "";
    document.getElementById("telInput").value = "";
}

function exibeProfs(){
    let div = document.getElementById("exibeProfs");

    if(professores.length == 0){
        div.innerHTML = "<h5>Sem professores Cadastrados</h5>";
        return;
    } 

    let html = "";
    
    for(let i = 0; i < professores.length ; i++){
        html += "<div class='card-prof'>"+
                    "Nome: " + professores[i].nome + "<br/>" +
                    "Matéria: " + professores[i].materia + "<br/>" +
                    "Telefone: " + professores[i].tel + "<br/>" +
                "</div>";
    }

    div.innerHTML = html;
}

/*
Crie uma tela inicial que chame o cadastro e a consulta dos alunos.
Crie uma página de cadastro de professores com nome, matéria e telefone.
Também uma tela de exibição(consulta).
*/