var alunos = [];

if(sessionStorage.getItem("alunos") != undefined){
    alunos = JSON.parse(sessionStorage.getItem("alunos"));
}

function cadastraAlunos(){
    alunos.push({
        nome: document.getElementById("nomeInput").value,
        idade: document.getElementById("idadeInput").value
    })
    sessionStorage.setItem("alunos", JSON.stringify(alunos));
    document.getElementById("nomeInput").value = "";
    document.getElementById("idadeInput").value = "";
}

function exibeAlunos(){
    let div = document.getElementById("exibeAlunos");

    if(alunos.length == 0){
        div.innerHTML = "<h5>Sem alunos Cadastrados</h5>";
        return;
    } 

    let html = "";
    
    for(let i = 0; i < alunos.length ; i++){
        html += "<div class='card-aluno'>"+
                    "Nome: " + alunos[i].nome + "<br/>" +
                    "Idade: " + alunos[i].idade + "<br/>" +
                "</div>";
    }

    div.innerHTML = html;
}

/*
Crie uma tela inicial que chame o cadastro e a consulta dos alunos.
Crie uma página de cadastro de professores com nome, matéria e telefone.
Também uma tela de exibição(consulta).
*/