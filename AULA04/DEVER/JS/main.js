function geraMedia() {
    // Declarando variáveis
    let nome = document.getElementById("inputNome").value;
    let nota1 = parseFloat(document.getElementById("inputNota1").value);
    let nota2 = parseFloat(document.getElementById("inputNota2").value);
    let nota3 = parseFloat(document.getElementById("inputNota3").value);
    let nota4 = parseFloat(document.getElementById("inputNota4").value);
    let media = (nota1 + nota2 + nota3 + nota4) / 4;

    // Declarando condicionais
    if (media == 10) {
        document.getElementById("resultado").innerHTML = nome + " foi aprovado com louvor! " + "Média: " + media;
    } else if (media >= 7) {
        document.getElementById("resultado").innerHTML = nome + " foi aprovado! " + "Média: " + media;
    } else if(media <= 4) {
        document.getElementById("resultado").innerHTML = nome + " foi reprovado! " + "Média: " + media;
    } else {
        document.getElementById("resultado").innerHTML = nome + " está de recuperação! " + "Média: " + media;
    }
}