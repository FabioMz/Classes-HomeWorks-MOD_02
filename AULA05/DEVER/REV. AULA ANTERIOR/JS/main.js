//---------VAR GLOBAL---------------------------
var media = 0;//variável global já iniciada
var genero = "";
//----------------------------------------------

function cadAluno(){
    let notas = document.getElementsByClassName("nota");

    let nota1 = Number(notas[0].value);
    let nota2 = Number(notas[1].value);
    let nota3 = Number(notas[2].value);
    let nota4 = Number(notas[3].value);

    mediaNotas(nota1,nota2,nota3,nota4);
    
    let resultado = "";
    if(media < 5){
        if(genero = 'm'){
            resultado = "<span class='reprovado'>Reprovado</span>";
        } else {
            resultado = "<span class='reprovado'>Reprovada</span>";
        }
    } else if (media < 7) {
        resultado = "<span class='recuperacao'>Recuperação</span>";
    } else {
        if(genero == 'f'){
            resultado = "<span class='aprovado'>Aprovada</span>";
        }else{
            resultado = "<span class='aprovado'>Aprovado</span>";
        }    
    }

    document.getElementById("resultadoAluno").innerHTML = resultado;


    // if(media >=7){
    //     resultado = "<span class='aprovado'>Aprovado</span>";
    // } else if (media <= 5){
    //     resultado = "<span class='recuperacao'>Recuperação</span>";
    // } else {
    //     resultado = "<span class='reprovado'>Reprovado</span>";
    // }

    // if(media >=7){
    //     resultado = "<span class='aprovado'>Aprovado</span>";
    // } else if (media <= 5){
    //     resultado = "<span class='reprovado'>Reprovado</span>";
    // } else {
    //     resultado = "<span class='recuperacao'>Recuperação</span>";
    // }
}

function mediaNotas(n1, n2, n3, n4){
    media = (n1 + n2 + n3 + n4)/4;
}

function escolheGenero(escolha){
    genero = escolha;
}