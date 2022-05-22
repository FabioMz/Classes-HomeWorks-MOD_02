function cadastraJogador(){

    let inome    = document.getElementById("inputNome");
    let iidade   = document.getElementById("inputIdade");
    let ipeso    = document.getElementById("inputPeso");
    let ialtura  = document.getElementById("inputAltura");
    let iposicao = document.getElementById("inputPosicao");

    let jogador = {
        nome: inome.value ,
        idade: iidade.value,
        peso: ipeso.value,
        altura: ialtura.value,
        posicao: iposicao.value
    }

    let jogador2 = {
        nome:       document.getElementById("inputNome").value ,
        idade:      document.getElementById("inputIdade").value ,
        peso:       document.getElementById("inputPeso").value,
        altura:     document.getElementById("inputAltura").value ,
        posicao:    document.getElementById("inputPosicao").value 
    }

    let jogador3 = {nome: "", idade: "", peso: "", altura: ""};
    jogador3.nome=       document.getElementById("inputNome").value; 
    jogador3.idade=      document.getElementById("inputIdade").value; 
    jogador3.peso=       document.getElementById("inputPeso").value;
    jogador3.altura=     document.getElementById("inputAltura").value; 
    jogador3.posicao=    document.getElementById("inputPosicao").value;

    let html = "<div class=\"card-jogador\">"+
                    "Nome: " + jogador.nome + "<br/>" +
                    "Idade: " + jogador.idade + "<br/>" +
                    "Peso: " + jogador.peso + "Kg<br/>" +
                    "Altura: " + jogador.altura + "cm<br/>" +
                    "Posição: " + jogador.posicao + "<br/>" +
                "</div>";
    
    document.getElementById("playerResult").innerHTML = html;
}