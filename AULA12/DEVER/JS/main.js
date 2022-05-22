
let produtos = [];

class produto {
    nome;
    setor;
    preco;
};

function cadastrar() {

    produto.setor = document.getElementById("selectSet").value;
    produto.nome = document.getElementById("inputProd").value;
    produto.preco = document.getElementById("inputPreco").value;


    // Switch p/ checagem de Produto
    switch (produto.setor) {
        case "disabled":
            alert("Favor, selecione o setor!");
            return false;
        default:
            produto.setor = document.getElementById("selectSet").value;
            console.log(produto.setor)
            document.getElementById("spanSetor").innerHTML = produto.setor;
    }

    // Switch p/ checagem de Produto
    switch (produto.nome) {
        case "":
            alert("Favor, insira o produto!");
            return false;
        default:
            produto.nome = document.getElementById("inputProd").value;
            console.log(produto.nome)
            document.getElementById("spanProduto").innerHTML = produto.nome;
    }

    // Switch p/ checagem de Preço
    switch (produto.preco) {
        case "":
            alert("Favor, insira o preço!");
            return false;
        default:
            produto.preco = document.getElementById("inputPreco").value;
            console.log(produto.preco)
            document.getElementById("spanPreco").innerHTML = produto.preco;
    }

    produtos.push(produto)
    console.log([produtos])


    //CRIANDO NOVOS ELEMENTOS HTML BASEADOS NO QUE FOI CADASTRADO PELO USUÁRIO ---------------------------- 

    // // NOVA DIV cardEtiq
    // let novoCardEtiq = "";
    // novoCardEtiq += '<div id="cardEtiq" class="cardEtiq">' + '</div>';
    // document.getElementById("containerEtiqs").innerHTML += novoCardEtiq;

    // // NOVA DIV divSpanSetor
    // let novadivSpanSetor = "";
    // novadivSpanSetor += '<div id="divSpanSetor" class="cardText setor-pos">' + '</div>';
    // document.getElementBY("cardEtiq").innerHTML += novadivSpanSetor;

    // // NOVO SPAN spanSetor
    // let novoSpanSetor = "";
    // novoSpanSetor += '<span id="spanSetor" class="cardText setor">' + produto.setor + '</span>';
    // document.getElementById("divSpanSetor").innerHTML += novoSpanSetor;

    // // NOVA DIV divSpanProduto
    // let novadivSpanProduto = "";
    // novadivSpanProduto += '<div id="divSpanProduto" class="cardText produto-pos">' + '</div>';
    // document.getElementById("cardEtiq").innerHTML += novadivSpanProduto;

    // // NOVO SPAN spanProduto
    // let novoSpanProduto = "";
    // novoSpanProduto += '<span id="spanProduto" class="cardText produto">' + produto.nome + '</span>';
    // document.getElementById("divSpanProduto").innerHTML += novoSpanProduto;

    // // NOVA DIV divSpanPreco
    // let novadivSpanPreco = "";
    // novadivSpanPreco += '<div id="divSpanPreco" class="cardText preco-pos">' + '</div>';
    // document.getElementById("cardEtiq").innerHTML += novadivSpanPreco ;

    // // NOVO SPAN spanPreco
    // let novoSpanPreco = "";
    // novoSpanPreco += '<span id="spanPreco" class="cardText preco">' + produto.preco + '</span>';
    // document.getElementById("divSpanPreco").innerHTML += novoSpanPreco;

    // Transmutando Elementos HTML
    document.getElementById("containerEtiqs").style.display = "block";
    document.getElementById("form-produtos").reset();

}