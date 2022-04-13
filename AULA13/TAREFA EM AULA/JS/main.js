/*#################### CLASSES ####################*/
class Produto{
    nome;
    preco;
    setor;
}
//-------------------------------------------------------

/*#################### VAR GLOBAIS ####################*/
var produtos = [];

//--------------------------------------------------------

//#################### FUNCTIONS ####################

//------------------- CADASTRAR -----------------------
function cadastrar(){
    let prod = new Produto();

    prod.nome = document.getElementById("inputNome").value;
    prod.preco = document.getElementById("inputPreco").value;
    prod.setor = document.getElementById("inputSetor").value;

    produtos.push(prod);
    document.getElementById('cadastro').reset();
    exibeProdutos();
}
//--------------------------------------------------------

//------------------Exibe Produtos -----------------------

function exibeProdutos(){
    let html = ""

    for(let i = 0; i < produtos.length; i++){
        let numeros = ['One','Two','Tree'];
        html +=   '<div class="price-tag" id="card'+numeros[i]+'">'+
                    "<div class='nomeProduto'>Produto: " + produtos[i].nome + "</div>" +
                    "<div class='setorProduto'>Setor: " + produtos[i].setor + "</div>" +
                    "<div class='precoProduto'>Preco: " + produtos[i].preco + "</div>" +
                '</div>';
    }
    document.getElementById("exibeProdutos").innerHTML = html;

}

///Faça a exibição acontecer com cards ornamentos com uma figura de fundo,
//sem usar background-image


//---------------------------------------------------