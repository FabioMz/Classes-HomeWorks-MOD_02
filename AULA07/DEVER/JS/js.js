// Funtion para botão da pág. Html
function run() {

    let dadosAluno = [];

    while(0==0){
        if(!window.confirm("Consultar média de aluno?")){
            break;
        }
    
        let nome = window.prompt("Digite o nome do aluno:");
        let n1 = Number(window.prompt("Digite a nota da Av1:"));
        let n2 = Number(window.prompt("Digite a nota da Av2:"));
        let n3 = Number(window.prompt("Digite a nota da Av3:"));
        let n4 = Number(window.prompt("Digite a nota da Av4:"));
        let media = (n1 + n2 + n3 + n4) / 4
        if (media >= 7) {
            var situacao = "Aprovado" ;  
        } else {
            var situacao = "Reprovado";
        }
    
        let dados = [nome, n1, n2, n3, n4, media, situacao];
    
        dadosAluno.push(dados);
    }
    
    for(let i = 0 ; i < dadosAluno.length ; i++){
        console.log("Nome: "    + dadosAluno[i][0]);
        console.log("Nota 1: "   + dadosAluno[i][1]);
        console.log("Nota 2: "    + dadosAluno[i][2]);
        console.log("Nota 3: "  + dadosAluno[i][3]);
        console.log("Nota 4: "  + dadosAluno[i][4]);
        console.log("Média: "  + dadosAluno[i][5]);
        console.log("Situação: "  + dadosAluno[i][6]);
        console.log("-----------------------------")
    }
}
