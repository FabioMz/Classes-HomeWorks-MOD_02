function maiorIdade() {
    let nome = document.getElementById("inputNome").value;
    let idade = Number(document.getElementById("inputIdade").value)
    let sexo = document.getElementById("inputSexo").value;

    // if(idade >= 18) {
    //     document.getElementById("resultadoCompara").innerHTML = nome + " é maior de 18";
    // }
    // else{
    //     document.getElementById("resultadoCompara").innerHTML = nome + " é menor de 18";
    // }

    let texto = "";

    if(idade >= 18 && sexo == "F") {
        texto = nome + " é mulher e maior de 18"; 
    } else if(idade >= 18 && sexo == "M"){
        texto = nome + " é homem e maior de 18"; 
    } else if(sexo == "F"){
        texto = nome + " é mulher e menor de 18"; 
    } else {
        texto = nome + " é homem e menor de 18"; 
    }

    document.getElementById("resultadoCompara").innerHTML = texto;
}