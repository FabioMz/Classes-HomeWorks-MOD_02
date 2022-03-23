//VARIAVEIS GLOBAIS
var alunos = [];
//-----------------------------------------------------------

//FUNCTIONS-------------------------------------------------

function mediaNotas(valor1, valor2, valor3, valor4) {
    return (valor1 + valor2 + valor3 + valor4) / 4;
}
//----------------------------------------------------------

//SCRIPT---------------------------------------------------
do {
    if (window.confirm("Deseja cadastrar um novo aluno?")) {
        let nome = window.prompt("Nome do aluno");
        let n1 = Number(window.prompt("Nota 1"));
        let n2 = Number(window.prompt("Nota 2"));
        let n3 = Number(window.prompt("Nota 3"));
        let n4 = Number(window.prompt("Nota 4"));
        let media = mediaNotas(n1, n2, n3, n4);

        alunos.push([nome, n1, n2, n3, n4, media]);
        //alunos.push([nome,n1,n2,n3,n4, mediaNotas(n1,n2,n3,n4)])
    } else {
        break;
    }
} while (true);

console.log("Lista de Alunos");
console.log("=========================================")

for(let i = 0; i < alunos.length ; i++){
    let situacao = "";
    if(alunos[i][5]>=7){situacao="Aprovado";}else{situacao = "Reprovado";}

    console.log("Nome:\t" + alunos[i][0] + "\n"+
                "Nota 1:\t" + alunos[i][1] + "\n"+
                "Nota 2:\t" + alunos[i][2] + "\n"+
                "Nota 3:\t" + alunos[i][3] + "\n"+
                "Nota 4:\t" + alunos[i][4] + "\n"+ 
                "Média:\t" + alunos[i][5] + "\n"+ 
                "Situação:\t" + situacao);
    console.log("--------------------------------------------")
}

//---------------------------------------------------------

