// VARIÁVEIS GLOBAIS--------------------------------
var carros = [];
//-------------------------------------------------

function cadastrar(){
    let modelo = document.getElementById("inputModelo").value;
    let cor = document.getElementById("inputCor").value;
    let ano = document.getElementById("inputAno").value;
    let placa = document.getElementById("inputPlaca").value;
    let preco = document.getElementById("inputPreco").value;
    
    if(preco.indexOf("R$") >= 0){
        preco = preco.replace("R$",""); 
    }

    while(preco.indexOf(" ") >= 0){
        preco = preco.replace(" ","");
    }

    if(modelo == ""){
        alert("Modelo precisa ser preenchido!");
        document.getElementById("inputModelo").focus();
        return false;
    }

    carros.push([modelo,Number(ano), cor, placa, Number(preco)]);
    document.getElementById("form-cadastro").reset();
}

function colocaCifrao(){
    let preco = document.getElementById("inputPreco");
     
    if(preco.value == "")
        preco.value = "R$ "
}

function exibirCadastro(){
    document.getElementById("results").style.display = "block";
    let html = "";
    let divLista = document.getElementById("listaCarros");
    divLista.innerHTML = "";
    let i = 0;
    for(i ; i < carros.length ; i++){
        html += '<div class="cardCarro col-md-4"'+
                  'style="background-color: ' + carros[i][2] +'">'+ 
                    '<div class="dados-carro">' +
                        "Modelo: " + carros[i][0] + '<br/>'+
                        "Ano: " + carros[i][1] + '<br/>'+
                        "Placa: " + carros[i][3] + '<br/>'+
                        "Preço: " + carros[i][4] + '<br/>'+
                    '</div>'+
                '</div>';
    }
    
    if(i==0){
        html = '<div class="container"><h5>Não há Carros cadastrados</h5></div>';
    }
    divLista.innerHTML = html;
}